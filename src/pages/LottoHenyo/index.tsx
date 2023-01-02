import React, { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import axios from "axios";
import Navigation from "../../components/Navigation";
import { Exclude, Count, game, CountI, ColorObject } from "./components/enums";
import useCountColor from "./hooks/useCountColor";
import LastResults from "./components/LastResults";
import Header from "./components/Header";
import ColorCount from "./components/ColorCount";
import LastResultsPredict from "./components/LastResultsPredict";
import Schedule from "./components/Schedule";
import HomePage from "../HomePage";
import PicksArr from "./components/PicksArr";
import useHandleXDraws from "./hooks/useHandleXDraws";
import ColorPicker from "./components/ColorPicker";

const LottoHenyo = () => {
  const [colorObj, setColorObj] = useState<ColorObject[]>([]);
  const { handleXdraws } = useHandleXDraws();

  const [all, setAll] = useState<number[]>([]);
  const [lastResults, setlastResults] = useState<Exclude[]>([]);
  const [lastResultsPredict, setlastResultsPredict] = useState<Exclude[]>([]);
  const [picksArr, setPicksArr] = useState<{ picks: number[]; id: number }[]>(
    []
  );
  const [picks, setPicks] = useState<number[]>([]);
  const [excludeArr, setExcludeArr] = useState<number[]>([]);
  const [showClose, setShowClose] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [maxNumber, setMaxNumber] = useState<number>(58);
  const [colorCount, setColorCount] = useState<CountI[]>([]);
  const { handlesetColorCount } = useCountColor();
  const [count, setCount] = useState<Count[]>([]);
  const [showCPicker, setShowPicker] = useState(false);
  const [colorObjId, setColorObjId] = useState(0);

  const countAllNumbers = (lastResults: Exclude[], all: number[]) => {
    const filtered = lastResults.filter(
      (res) => res.chance >= 4 && res.chance <= 62
    );
    const allCount = all.map((num) => {
      const allsame = filtered.flatMap((result) => [
        ...result.numbers.filter((number) => number === num),
      ]);
      return {
        num: num,
        count: allsame.length,
      };
    });

    setCount(allCount);
  };

  useEffect(() => {
    const getData = async () => {
      const data3 = await axios.get(`http://localhost:3500/colorObj`);
      setColorObj(data3.data);
      const data = await axios.get(`http://localhost:3500/${maxNumber}`);
      const data2 = await axios.get(`http://localhost:3500/picks`);

      const all = [];
      for (let index = 0; index < maxNumber; index++) {
        all.push(index + 1);
      }
      countAllNumbers(data.data, all);
      setAll(all);
      setlastResults(data.data);
      setPicksArr(data2.data);
      handlesetColorCount(data.data, setColorCount, data3.data);

      const lastResults2 = data.data.filter(
        (result: Exclude) => result.chance > 2
      );
      setlastResultsPredict([...lastResults2, { numbers: all, chance: 2 }]);
    };

    getData();
  }, [maxNumber]);

  const handleAddLast = (lastResults: Exclude[], excludeObj: Exclude) => {
    const data2 = new Date();
    const isLast4 = lastResults[0].chance === 4;
    const updateServer = async (data: Exclude) => {
      axios.post(`http://localhost:3500/${maxNumber}`, data);
    };
    if (excludeObj.numbers.length === 6 && excludeObj.chance !== 0 && isLast4) {
      const data4 = { ...excludeObj, id: data2.getTime() };
      const data = [...lastResults, data4];
      setlastResults(data);
      updateServer(data4);
    }
  };

  const sortColor = () => {
    type X = { color: number; num: number };
    /* function sortArray(arr: X[]) {
      "use strict";

      var counts = arr.reduce((carry: X, elem: X) => {
        carry.color = (carry.color || 0) + 1;
        return carry;
      }, {} as X);
      return arr.sort((a, b) =>
        counts[a.color] == counts[b.color]
          ? b.comb - a.comb
          : counts[b.comb] - counts[a.comb]
      );
    }*/

    const newarr = lastResults.map((exclude) => {
      let comb: number[] = [];
      const sort = exclude.numbers.map((num) => {
        let numr = 0;
        colorObj.forEach((obj) => {
          if (
            handleXdraws(
              num,
              lastResults,
              exclude.chance,
              obj.count,
              obj.draws
            ) &&
            numr === 0
          ) {
            //console.log(obj.id);
            comb.push(obj.id);
            numr = obj.id;
          }
        });
        return { color: numr, num: num };
      });

      let combinationID = comb.join("");
      const sorted = sort.sort((a, b) => a.color - b.color).map((c) => c.num);

      const sorted2 = sort
        .sort((a, b) => a.color - b.color)
        .map((c) => c.color);
      console.log(sort);

      return { ...exclude, numbers: sorted, comb: combinationID };
    });
    setlastResults(newarr);
  };
  const handleChancesUporDown = (
    lastResults: Exclude[],
    inputChance: number
  ) => {
    const test = lastResults.map((res) => {
      return { ...res, chance: res.chance + inputChance };
    });
    setlastResults(test);
    const lastResults2 = test.filter((result: Exclude) => result.chance > 2);
    setlastResultsPredict([...lastResults2, { numbers: all, chance: 2 }]);
  };

  const handleChangeGame = (next: number) => {
    let index = 0;
    game.forEach((num, i) => {
      if (num === maxNumber) {
        const number = i + next;
        if (next === 1) {
          index = number > 4 ? 0 : number;
        }
        if (next === -1) {
          index = number < 0 ? 4 : number;
        }
      }
    });
    setMaxNumber(game[index]);
  };

  const handleAddPicks = () => {
    handleAddLast(lastResults, {
      numbers: picks,
      chance: 2,
      id: new Date().getTime(),
    });
  };

  const handleSetPicksArr = () => {
    const data2 = new Date();
    const updateServer = async (data: any) => {
      axios.post(`http://localhost:3500/picks`, data);
    };
    if (picks.length === 6) {
      const data4 = { picks: picks, id: data2.getTime() };
      setPicksArr((arr) => {
        return [...arr, data4];
      });

      updateServer(data4);
    }
  };

  const handleSetPicksArrDelete = (id: number) => {
    const data2 = new Date();
    const updateServer = async (data: any) => {
      axios.post(`http://localhost:3500/picks`, data);
    };
    if (picks.length === 6) {
      const data4 = { picks: picks, id: data2.getTime() };
      setPicksArr((arr) => {
        return [...arr, data4];
      });

      updateServer(data4);
    }
  };

  return (
    <div>
      <ColorCount
        {...{ colorCount, colorObj, setColorObj, setShowPicker, setColorObjId }}
      />
      {showCPicker && (
        <div className="">
          <ColorPicker {...{ colorObj, id: colorObjId, setColorObj }} />
        </div>
      )}
      <Navigation
        {...{
          handleChangeGame,
          handleAddPicks,
          handleChancesUporDown,
          lastResults,
        }}
      />
      <div className="flex gap-4">
        <button
          onClick={() => {
            handleSetPicksArr();
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            sortColor();
          }}
        >
          sort
        </button>
      </div>
      <Header
        {...{
          colorObj,
          lastResults,
          lastResultsPredict,
          maxNumber,
          setExcludeArr,
          setShowClose,
        }}
      />
      <div className=" flex flex-col lg:flex-row">
        <LastResults
          {...{
            clicked,
            lastResults,
            maxNumber,
            setClicked,
            setPicks,
            setlastResults,
            showClose,
            colorObj,
          }}
        />

        <LastResultsPredict
          {...{
            count,
            excludeArr,
            lastResultsPredict,
            picks,
            setClicked,
            setlastResultsPredict,
            setPicks,
            colorObj,
          }}
        />
        <PicksArr
          {...{
            picksArr,
            excludeArr,
            lastResultsPredict,
            picks,
            setPicksArr,
            colorObj,
          }}
        />
      </div>
      <Schedule />
    </div>
  );
};

export default LottoHenyo;
