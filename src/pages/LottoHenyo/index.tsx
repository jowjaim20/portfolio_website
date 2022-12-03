import React, { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import axios from "axios";
import Navigation from "../../components/Navigation";
import {
  Exclude,
  Count,
  game,
  CountI,
  ColorObject,
  colorObj,
} from "./components/enums";
import useCountColor from "./hooks/useCountColor";
import LastResults from "./components/LastResults";
import Header from "./components/Header";
import ColorCount from "./components/ColorCount";
import LastResultsPredict from "./components/LastResultsPredict";
import Schedule from "./components/Schedule";
import HomePage from "../HomePage";
import PicksArr from "./components/PicksArr";
import useHandleXDraws from "./hooks/useHandleXDraws";

const LottoHenyo = () => {
  const { handleXdraws } = useHandleXDraws();
  const { handlesetColorCount } = useCountColor();

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
  const [count, setCount] = useState<Count[]>([]);

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
      handlesetColorCount(data.data, setColorCount);
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
    const newarr = lastResults.map((exclude) => {
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
            numr = obj.id;
          }
        });
        return { color: numr, num: num };
      });
      const sorted = sort.sort((a, b) => a.color - b.color).map((c) => c.num);
      return { ...exclude, numbers: sorted };
    });
    setlastResults(newarr);
    //console.log(newarr);
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
      <ColorCount {...{ colorCount }} />
      <Navigation
        {...{
          handleChangeGame,
          handleAddPicks,
          handleChancesUporDown,
          lastResults,
        }}
      />
      <Header
        {...{
          lastResults,
          lastResultsPredict,
          maxNumber,
          setExcludeArr,
          setShowClose,
        }}
      />

      <LastResults
        {...{
          clicked,
          lastResults,
          maxNumber,
          setClicked,
          setPicks,
          setlastResults,
          showClose,
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
        }}
      />
      <Schedule />
      <PicksArr
        {...{ picksArr, excludeArr, lastResultsPredict, picks, setPicksArr }}
      />
      <button
        onClick={() => {
          handleSetPicksArr();
          sortColor();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default LottoHenyo;

// const generate = (percent?: number) => {
//   const mul = percent ? percent : maxNumber;
//   const number = Math.floor(Math.random() * mul) + 1;
//   return number;
// };

// const handleExclude = (lastResults: Exclude[]) => {
//   const forExcude = lastResults
//     .map((data) => data.numbers.filter((num) => data.chance >= generate(100)))
//     .flat();

//   setExclude([...forExcude]);
//   return forExcude;
// };
// const numColor: any = {
//   1: "text-lime-50",
//   2: "text-gray-50",
//   3: "text-blue-50",
//   4: "text-amber-50",
//   5: "text-rose-50",
//   6: "text-fuchsia-50",
//   7: "text-indigo-50",
//   8: "text-teal-50",
//   9: "text-red-50",
//   10: "text-cyan-50",
//   11: "text-lime-200",
//   12: "text-gray-200",
//   13: "text-blue-200",
//   14: "text-amber-200",
//   15: "text-rose-200",
//   16: "text-fuchsia-200",
//   17: "text-indigo-200",
//   18: "text-teal-200",
//   19: "text-red-200",
//   20: "text-cyan-200",
//   21: "text-lime-500",
//   22: "text-gray-500",
//   23: "text-blue-500",
//   24: "text-amber-500",
//   25: "text-rose-500",
//   26: "text-fuchsia-500",
//   27: "text-indigo-500",
//   28: "text-teal-500",
//   29: "text-red-500",
//   30: "text-cyan-500",
//   31: "text-lime-600",
//   32: "text-gray-600",
//   33: "text-blue-600",
//   34: "text-amber-600",
//   35: "text-rose-600",
//   36: "text-fuchsia-600",
//   37: "text-indigo-600",
//   38: "text-teal-600",
//   39: "text-red-600",
//   40: "text-cyan-600",
//   41: "text-lime-700",
//   42: "text-gray-700",
//   43: "text-blue-700",
//   44: "text-amber-700",
//   45: "text-rose-700",
//   46: "text-fuchsia-700",
//   47: "text-indigo-700",
//   48: "text-teal-700",
//   49: "text-red-700",
//   50: "text-cyan-700",
//   51: "text-lime-900",
//   52: "text-gray-900",
//   53: "text-blue-900",
//   54: "text-amber-900",
//   55: "text-rose-900",
//   56: "text-fuchsia-900",
//   57: "text-indigo-900",
//   58: "text-teal-900",
//   59: "text-red-900",
//   60: "text-stone-900",
// };

{
  /* <div>last result</div> */
}
{
  /* <div className="grid grid-cols-6">
    {suggestCombo[maxNumber].map((s: any) => (
      <NumWrap {...s} />
    ))}
  </div> */
}
{
  /* <span>{lastResults.length}</span> */
}

{
  /* <button
          type="button"
          onClick={() => handleAddLast(lastResults, excludeObj)}
        >
          add lastresult
        </button> */
}

{
  /* <div className="flex gap-1">
          <div className=" flex gap-2">
            <div className="flex gap-1">
              {lottoNumbers.map((num) => (
                <div
                  onClick={() => {
                    console.log(num);
                    setClicked(num);
                  }}
                >
                  <NumWrap
                    num={num}
                    includeAll={includedAll(lastResults, num)}
                    include={included(exclude, num)}
                    single={handleSingle(num, lastResults)}
                    twice={handleTwice(num, lastResults, 28)}
                    twice5Draws={handleTwice5Draws(num, lastResults, 28)}
                    trice5Draws={handleTrice5Draws(num, lastResults, 28)}
                    twice3Draws={handleTwice3Draws(num, lastResults, 28)}
                    trice3Draws={handleTrice3Draws(num, lastResults, 28)}
                    trice={handleTrice(num, lastResults, 28)}
                    fourTimes={handleFourtimes(num, lastResults, 28)}
                    fiveTimes={handleFivetimes(num, lastResults, 28)}
                    once20Draw={handleOnce20draw(num, lastResults, 28)}
                    once10Draw={handleOnce10draw(num, lastResults, 28)}
                  />
                </div>
              ))}
            </div>
            <button
              className=" px-2 py-0.5 bg-lime-600 rounded-md"
              onClick={() =>
                handleAddLast(lastResults, { numbers: lottoNumbers, chance: 28 })
              }
            >
              ADD
            </button>
          </div>
        </div> */
}
{
  /* <div className=" flex justify-center items-center">
          <button
            className=" rounded-md bg-lime-700 px-3 py-1 text-white font-medium"
            onClick={handleReload}
            type="button"
          >
            Again
          </button>
        </div> */
}
// const suggestCombo: any = {
//   42: [
//     { num: 10, twice: true },
//     { num: 10, twice: true },
//     { num: 3, twice3Draws: true },
//     { num: 3, twice3Draws: true },
//     { num: 5, twice5Draws: true },
//     { num: 5, twice5Draws: true },
//     { num: 10, once10Draw: true },
//     { num: 10, once10Draw: true },
//     { num: 10, trice: true },
//     { num: 20, once20Draw: true },
//     { num: 5, trice5Draws: true },
//     { num: 3, trice3Draws: true },
//   ],
//   45: [],
//   49: [
//     { num: 10, twice: true },
//     { num: 10, twice: true },
//     { num: 20, once20Draw: true },
//     { num: 20, once20Draw: true },

//     { num: 5, twice5Draws: true },
//     { num: 5, twice5Draws: true },
//     { num: 3, twice3Draws: true },
//     { num: 3, twice3Draws: true },

//     { num: 10, once10Draw: true },
//     { num: 10, trice: true },
//     { num: 5, trice5Draws: true },
//     { num: 3, trice3Draws: true },
//   ],
//   55: [],
//   58: [
//     { num: 20, once20Draw: true },
//     { num: 20, once20Draw: true },
//     { num: 10, twice: true },
//     { num: 10, twice: true },
//     { num: 3, twice3Draws: true },
//     { num: 3, twice3Draws: true },
//     { num: 10, once10Draw: true },
//     { num: 10, once10Draw: true },
//     { num: 5, twice5Draws: true },
//     { num: 10, trice: true },
//     { num: 3, trice3Draws: true },
//     { num: 5, trice5Draws: true },
//   ],
// };

// include = true,
// includeAll = false,
// trice3Draws = false,
// twice3Draws = false,
// trice5Draws = false,
// twice5Draws = false,
// single = false,
// twice = false,
// trice = false,
// fourTimes = false,
// fiveTimes = false,
// once20Draw = false,
// once10Draw = false,
// clicked = 0,

// const counter = (count: string[]) => {
//   const colorsCount = [
//     { number: "white", count: 0, desc: "1/20" },
//     { number: "green", count: 0, desc: "1/10" },
//     { number: "pink", count: 0, desc: "3/3" },
//     { number: "skyBlue", count: 0, desc: "2/3" },
//     { number: "darkPink", count: 0, desc: "3/5" },
//     { number: "violet", count: 0, desc: "2/5" },
//     { number: "black", count: 0, desc: "5/10" },
//     { number: "gray", count: 0, desc: "4/10" },
//     { number: "red", count: 0, desc: "3/10" },
//     { number: "blue", count: 0, desc: "2/10" },
//   ];

//   const data = colorsCount.map((d) => {
//     const length = count.filter((e) => e === d.number);
//     //console.log(length);
//     return { ...d, count: length.length };
//   });
//   setColorCount(data);
// };

// const counter = (count: string[]) => {
//   const colorsCount = [
//     { number: "white", count: 0, desc: "1/20" },
//     { number: "green", count: 0, desc: "1/10" },
//     { number: "pink", count: 0, desc: "3/3" },
//     { number: "skyBlue", count: 0, desc: "2/3" },
//     { number: "darkPink", count: 0, desc: "3/5" },
//     { number: "violet", count: 0, desc: "2/5" },
//     { number: "black", count: 0, desc: "5/10" },
//     { number: "gray", count: 0, desc: "4/10" },
//     { number: "red", count: 0, desc: "3/10" },
//     { number: "blue", count: 0, desc: "2/10" },
//   ];

//   const data = colorsCount.map((d) => {
//     const length = count.filter((e) => e === d.number);
//     //console.log(length);
//     return { ...d, count: length.length };
//   });
//   setColorCount(data);
// };
{
  /* <div className="flex">
          <input
            className=" bg-lime-100 max-w-lg"
            min={0}
            type="number"
            value={input.toString()}
            onChange={(e) => setInput(e.target.value)}
          />
  
          <button
            className=" bg-lime-100 px-5 ml-1 max-w-lg"
            type="button"
            onClick={handleAddExclude}
          >
            add
          </button>
        </div> */
}

// console.log(colorCount);
// const handleChangeChance = (
//   lastResults: Exclude[],
//   inputChance: number,
//   changeInputChance: number
// ) => {
//   const test = lastResults.map((res) => {
//     if (res.chance === inputChance) {
//       return { ...res, chance: changeInputChance };
//     } else {
//       return res;
//     }
//   });
//   setlastResults(test);
// };

//const handleReload = () => {
//   const excludes = handleExclude(lastResults);
//   const winningNum: number[] = [];
//   //console.log(exclude);
//   for (let i = 0; winningNum.length !== 6; i++) {
//     const all = winningNum.concat(excludes);
//     console.log(all);
//     const random = generate();
//     if (all.includes(random) && !winningNum.includes(random)) {
//       winningNum.push(random);
//     } else {
//       const num = generate(100);
//       if (num <= 1 && !winningNum.includes(random)) {
//         winningNum.push(random);
//       }
//     }
//   }
//   setExclude(excludes);
//   setLottoNumbers(winningNum);
// };
// const identifyNotIncluded = (lastResults: any, all: any) => {
//   let data = [];
//   const filtered = (index: number) => {
//     const data = all.filter((num: any) => {
//       const data = lastResults
//         .filter(
//           (result: Exclude) => result.chance >= 4 && result.chance >= 42
//         )
//         .map((result: Exclude) => result.numbers[index]);
//       const dat2 = data.includes(num);

//       return !dat2;
//     });
//     return data;
//   };

//   for (let index = 0; index < 6; index++) {
//     data.push(filtered(index));
//   }

//   const data2 = data.flat();
//   const countObj = all.map((num: number) => {
//     const count = data2.filter((data) => data === num);
//     return {
//       num: num,
//       count: count.length,
//     };
//   });
//   setCount(countObj);
//   return [1, 2];
// };
