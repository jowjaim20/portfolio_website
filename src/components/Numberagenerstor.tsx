import React, { useEffect, useState, useSyncExternalStore } from "react";
import { isDataView } from "util/types";
interface Exclude {
  numbers: number[];
  chance: number;
}

interface Count {
  num: number;
  count: number;
}
interface LastResult {
  week1: Exclude;
  week2?: Exclude;
  week3?: Exclude;
  week4?: Exclude;
  week5?: Exclude;
  week6?: Exclude;
}
const numColor: any = {
  1: "text-lime-50",
  2: "text-gray-50",
  3: "text-blue-50",
  4: "text-amber-50",
  5: "text-rose-50",
  6: "text-fuchsia-50",
  7: "text-indigo-50",
  8: "text-teal-50",
  9: "text-red-50",
  10: "text-cyan-50",
  11: "text-lime-200",
  12: "text-gray-200",
  13: "text-blue-200",
  14: "text-amber-200",
  15: "text-rose-200",
  16: "text-fuchsia-200",
  17: "text-indigo-200",
  18: "text-teal-200",
  19: "text-red-200",
  20: "text-cyan-200",
  21: "text-lime-500",
  22: "text-gray-500",
  23: "text-blue-500",
  24: "text-amber-500",
  25: "text-rose-500",
  26: "text-fuchsia-500",
  27: "text-indigo-500",
  28: "text-teal-500",
  29: "text-red-500",
  30: "text-cyan-500",
  31: "text-lime-600",
  32: "text-gray-600",
  33: "text-blue-600",
  34: "text-amber-600",
  35: "text-rose-600",
  36: "text-fuchsia-600",
  37: "text-indigo-600",
  38: "text-teal-600",
  39: "text-red-600",
  40: "text-cyan-600",
  41: "text-lime-700",
  42: "text-gray-700",
  43: "text-blue-700",
  44: "text-amber-700",
  45: "text-rose-700",
  46: "text-fuchsia-700",
  47: "text-indigo-700",
  48: "text-teal-700",
  49: "text-red-700",
  50: "text-cyan-700",
  51: "text-lime-900",
  52: "text-gray-900",
  53: "text-blue-900",
  54: "text-amber-900",
  55: "text-rose-900",
  56: "text-fuchsia-900",
  57: "text-indigo-900",
  58: "text-teal-900",
  59: "text-red-900",
  60: "text-stone-900",
};
const NumWrap: React.FC<{
  num: number;
  include?: boolean;
  includeAll?: boolean;
  single?: boolean;
  twice?: boolean;
  twice5Draws?: boolean;
  twice3Draws?: boolean;
  trice?: boolean;
  trice5Draws?: boolean;
  trice3Draws?: boolean;
  fourTimes?: boolean;
  fiveTimes?: boolean;
  onClick?: () => void;
  clicked?: number;
  once20Draw?: boolean;
  once10Draw?: boolean;
}> = ({
  num,
  include = true,
  includeAll = false,
  trice3Draws = false,
  twice3Draws = false,
  trice5Draws = false,
  twice5Draws = false,
  single = false,
  twice = false,
  trice = false,
  fourTimes = false,
  fiveTimes = false,
  once20Draw = false,
  once10Draw = false,
  clicked = 0,
}) => {
  const id: any = num.toString();
  return (
    <div
      className={`${
        clicked === num
          ? " text-fuchsia-900 border-2 border-black text-[25px] font-extrabold"
          : " text-gray-700 "
      }
   flex justify-center items-center text-lg font-bold rounded-full shadow-inner shadow-gray-900 ${
     once20Draw
       ? " bg-white"
       : once10Draw
       ? " bg-[#53ff7e]"
       : trice3Draws
       ? " bg-rose-200"
       : twice3Draws
       ? "bg-[#00E3FF]"
       : trice5Draws
       ? " bg-[#ff57e2]"
       : twice5Draws
       ? " bg-[#a99eff]"
       : fiveTimes
       ? "bg-black"
       : fourTimes
       ? " bg-gray-400"
       : trice
       ? " bg-[#ff0000]"
       : twice
       ? " bg-[#4d88ff]"
       : single
       ? " border-2 border-slate-50"
       : includeAll
       ? " bg-yellow-900"
       : include
       ? " bg-pink-500"
       : " bg-purple-900"
   } w-10 h-10 p-2`}
    >
      {num}
    </div>
  );
};

const NumWrap2: React.FC<{
  num: number;
  include?: boolean;
  includeAll?: boolean;
  single?: boolean;
  twice?: boolean;
  twice5Draws?: boolean;
  twice3Draws?: boolean;
  trice?: boolean;
  trice5Draws?: boolean;
  trice3Draws?: boolean;
  fourTimes?: boolean;
  fiveTimes?: boolean;
  onClick?: () => void;
  clicked?: number;
  once20Draw?: boolean;
  once10Draw?: boolean;
}> = ({
  num,
  include = true,
  includeAll = false,
  trice3Draws = false,
  twice3Draws = false,
  trice5Draws = false,
  twice5Draws = false,
  single = false,
  twice = false,
  trice = false,
  fourTimes = false,
  fiveTimes = false,
  once20Draw = false,
  once10Draw = false,
  clicked = 0,
}) => {
  const id: any = num.toString();
  return (
    <div
      className={` absolute z-30 -top-1 -right-1${
        clicked === num
          ? " text-fuchsia-900 border-2 border-black text-[25px] font-extrabold"
          : " text-white "
      }
   flex justify-center items-center text-lg font-bold rounded-full shadow-inner shadow-gray-900 ${
     once20Draw
       ? " bg-white"
       : once10Draw
       ? " bg-[#53ff7e]"
       : trice3Draws
       ? " bg-rose-200"
       : twice3Draws
       ? "bg-[#00E3FF]"
       : trice5Draws
       ? " bg-[#ff57e2]"
       : twice5Draws
       ? " bg-[#a99eff]"
       : fiveTimes
       ? "bg-black"
       : fourTimes
       ? " bg-gray-400"
       : trice
       ? " bg-[#ff0000]"
       : twice
       ? " bg-[#4d88ff]"
       : single
       ? " border-2 border-slate-50"
       : includeAll
       ? " bg-yellow-900"
       : include
       ? " bg-pink-500"
       : " bg-purple-900"
   } w-3 h-3 p-2`}
    >
      {num}
    </div>
  );
};

const NumberGenerator = () => {
  const [all, setAll] = useState<number[]>([]);
  const [lastResults, setlastResults] = useState<Exclude[]>([]);
  const [lastResultsPredict, setlastResultsPredict] = useState<Exclude[]>([]);

  const [excludeObj, setExcludeObj] = useState<Exclude>({
    numbers: [],
    chance: 0,
  });
  const [showClose, setShowClose] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [input, setInput] = useState("");
  const [inputChance, setInputChance] = useState("");
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [maxNumber, setMaxNumber] = useState<number>(58);
  const [changeInputChance, setChangeInputChance] = useState("");
  const [exclude, setExclude] = useState<number[]>([]);
  const [count, setCount] = useState<Count[]>([]);
  const game = [42, 45, 49, 55, 58];

  const generate = (percent?: number) => {
    const mul = percent ? percent : maxNumber;
    const number = Math.floor(Math.random() * mul) + 1;
    return number;
  };
  const handleExclude = (lastResults: Exclude[]) => {
    //const data = [{ numbers: [20, 21, 22, 23, 24], chance: 50 }];
    const forExcude = lastResults
      .map((data) => data.numbers.filter((num) => data.chance >= generate(100)))
      .flat();
    // setlastResults(data);
    //console.log(forExcude);
    // const all = [];

    setExclude([...forExcude]);
    return forExcude;
  };

  const identifyNotIncluded = (lastResults: any, all: any) => {
    let data = [];
    const filtered = (index: number) => {
      const data = all.filter((num: any) => {
        const data = lastResults
          .filter((result: Exclude) => result.chance < 76)
          .map((result: Exclude) => result.numbers[index]);
        const dat2 = data.includes(num);
        //console.log(data);
        return !dat2;
      });
      return data;
    };

    for (let index = 0; index < 6; index++) {
      data.push(filtered(index));
    }

    const data2 = data.flat();
    const countObj = all.map((num: number) => {
      const count = data2.filter((data) => data === num);
      return {
        num: num,
        count: count.length,
      };
    });
    setCount(countObj);
    return [1, 2];
  };

  useEffect(() => {
    const data = localStorage.getItem(maxNumber.toString());
    const data2 = data !== null ? JSON.parse(data) : [];
    //console.log(data2);
    const all = [];
    for (let index = 0; index < maxNumber; index++) {
      all.push(index + 1);
    }

    identifyNotIncluded(data2, all);
    setAll(all);
    setlastResults(data2);
  }, [maxNumber]);

  const handleReload = () => {
    const excludes = handleExclude(lastResults);
    const winningNum: number[] = [];
    //console.log(exclude);
    for (let i = 0; winningNum.length !== 6; i++) {
      const all = winningNum.concat(excludes);
      console.log(all);
      const random = generate();
      if (all.includes(random) && !winningNum.includes(random)) {
        winningNum.push(random);
      } else {
        const num = generate(100);
        if (num <= 1 && !winningNum.includes(random)) {
          winningNum.push(random);
        }
      }
    }
    setExclude(excludes);
    setLottoNumbers(winningNum);
  };

  const handleAddExclude = () => {
    if (excludeObj.numbers.length !== 6) {
      setExcludeObj({
        ...excludeObj,
        numbers: [...excludeObj.numbers, parseInt(input)],
        chance: +inputChance,
      });
      setInput("");
    }
  };
  const handleAddLast = (lastResults: Exclude[], excludeObj: Exclude) => {
    if (excludeObj.numbers.length === 6 && excludeObj.chance !== 0) {
      const data = [...lastResults, excludeObj];
      handleExclude(data);
      setlastResults(data);
      localStorage.setItem(
        maxNumber.toString(),
        JSON.stringify([...lastResults, excludeObj])
      );
      setExcludeObj({ numbers: [], chance: 0 });
    }
  };

  const handleRemove = (chance: number) => {
    const data = lastResults.filter((res) => chance !== res.chance);
    console.log(data);
    setlastResults([...data]);
    localStorage.setItem(maxNumber.toString(), JSON.stringify([...data]));
  };

  const included = (exclude: number[], num: number) => {
    return exclude.includes(num);
  };
  const includedAll = (lastResults: Exclude[], num: number) => {
    const forExcude = lastResults
      .map((data) => data.numbers.map((num) => num))
      .flat();
    return !forExcude.includes(num);
  };

  const handleSingle = (nums: number, lastResults: Exclude[]) => {
    const count = lastResults
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 1;
  };
  const handleTwice = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 18
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 2;
  };
  const handleTwice5Draws = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 8
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 2;
  };
  const handleTwice3Draws = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 4
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 2;
  };

  const handleTrice = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 18
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 3;
  };
  const handleTrice5Draws = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 8
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 3;
  };
  const handleTrice3Draws = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 4
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 3;
  };

  const handleFourtimes = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 18
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 4;
  };

  const handleFivetimes = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 18
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 5;
  };
  const handleOnce20draw = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 38
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 1;
  };
  const handleOnce10draw = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0
  ) => {
    const data = lastResults.filter(
      (res) => res.chance >= chance && res.chance <= chance + 18
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === 1;
  };
  const handleChangeChance = (
    lastResults: Exclude[],
    inputChance: number,
    changeInputChance: number
  ) => {
    const test = lastResults.map((res) => {
      if (res.chance === inputChance) {
        return { ...res, chance: changeInputChance };
      } else {
        return res;
      }
    });
    setlastResults(test);
  };

  const handleChancesUporDown = (
    lastResults: Exclude[],
    inputChance: number
  ) => {
    const test = lastResults.map((res) => {
      return { ...res, chance: res.chance + inputChance };
    });
    setlastResults(test);
  };

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
  const suggestCombo: any = {
    42: [
      { num: 10, twice: true },
      { num: 10, twice: true },
      { num: 3, twice3Draws: true },
      { num: 3, twice3Draws: true },
      { num: 5, twice5Draws: true },
      { num: 5, twice5Draws: true },
      { num: 10, once10Draw: true },
      { num: 10, once10Draw: true },
      { num: 10, trice: true },
      { num: 20, once20Draw: true },
      { num: 5, trice5Draws: true },
      { num: 3, trice3Draws: true },
    ],
    45: [],
    49: [
      { num: 10, twice: true },
      { num: 10, twice: true },
      { num: 20, once20Draw: true },
      { num: 20, once20Draw: true },

      { num: 5, twice5Draws: true },
      { num: 5, twice5Draws: true },
      { num: 3, twice3Draws: true },
      { num: 3, twice3Draws: true },

      { num: 10, once10Draw: true },
      { num: 10, trice: true },
      { num: 5, trice5Draws: true },
      { num: 3, trice3Draws: true },
    ],
    55: [],
    58: [
      { num: 20, once20Draw: true },
      { num: 20, once20Draw: true },
      { num: 10, twice: true },
      { num: 10, twice: true },
      { num: 3, twice3Draws: true },
      { num: 3, twice3Draws: true },
      { num: 10, once10Draw: true },
      { num: 10, once10Draw: true },
      { num: 5, twice5Draws: true },
      { num: 10, trice: true },
      { num: 3, trice3Draws: true },
      { num: 5, trice5Draws: true },
    ],
  };

  return (
    <div className="flex flex-col gap-2">
      <div className=" flex">
        {game.map((num) => (
          <div
            className={`flex justify-center items-center text-lg font-bold rounded-full ${
              maxNumber === num ? " bg-lime-500" : "bg-green-600"
            } w-10 h-10 p-2`}
            onClick={() => setMaxNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="flex gap-1">
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
      </div>
      <div className=" flex justify-center items-center">
        <button
          className=" rounded-md bg-lime-700 px-3 py-1 text-white font-medium"
          onClick={handleReload}
          type="button"
        >
          Again
        </button>
      </div>
      <div>
        <div>
          <div>last result</div>
          <div className="grid grid-cols-6">
            {suggestCombo[maxNumber].map((s: any) => (
              <NumWrap {...s} />
            ))}
          </div>
          <span>{lastResults.length}</span>
        </div>
        <hr />
        <div className=" flex flex-col md:flex-row gap-2">
          <div className=" h-[400px] overflow-y-scroll w-fit">
            {lastResults
              .sort((a, b) => a.chance - b.chance)
              .filter((res) => res.numbers.length === 6)
              .map((res) => (
                <div className={`flex ${res.chance > 60 ? "bg-black" : ""}`}>
                  {res.numbers.map((num) => (
                    <div
                      onClick={() => {
                        console.log(num);
                        setClicked(num);
                      }}
                    >
                      <NumWrap
                        clicked={clicked}
                        num={num}
                        single={handleSingle(num, lastResults)}
                        twice={handleTwice(num, lastResults, res.chance)}
                        trice={handleTrice(num, lastResults, res.chance)}
                        twice5Draws={handleTwice5Draws(
                          num,
                          lastResults,
                          res.chance
                        )}
                        trice5Draws={handleTrice5Draws(
                          num,
                          lastResults,
                          res.chance
                        )}
                        twice3Draws={handleTwice3Draws(
                          num,
                          lastResults,
                          res.chance
                        )}
                        trice3Draws={handleTrice3Draws(
                          num,
                          lastResults,
                          res.chance
                        )}
                        fourTimes={handleFourtimes(
                          num,
                          lastResults,
                          res.chance
                        )}
                        fiveTimes={handleFivetimes(
                          num,
                          lastResults,
                          res.chance
                        )}
                        once20Draw={handleOnce20draw(
                          num,
                          lastResults,
                          res.chance
                        )}
                        once10Draw={handleOnce10draw(
                          num,
                          lastResults,
                          res.chance
                        )}
                      />
                    </div>
                  ))}
                  <div
                    className={`${
                      showClose ? "" : "hidden"
                    } bg-red-600 flex justify-center items-center rounded-full text-white w-fit`}
                  >
                    <div className="flex justify-center items-center w-10 h-10 rounded-md bg-orange-400">
                      {res.chance}
                    </div>
                    <button
                      className={` bg-red-600 flex justify-center items-center w-10 h-10 rounded-full text-white`}
                      onClick={() => handleRemove(res.chance)}
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className=" h-[400px] overflow-y-scroll w-fit">
            {lastResultsPredict
              .sort((a, b) => a.chance - b.chance)
              .filter((res) => res.numbers.length > 6)
              .map((res) => (
                <div className="grid grid-cols-6">
                  {res.numbers.map((num) => (
                    <div
                      className="relative z-0"
                      onClick={() => {
                        console.log(num);
                        setClicked(num);
                      }}
                    >
                      <NumWrap
                        clicked={clicked}
                        num={num}
                        single={handleSingle(num, lastResultsPredict)}
                        twice={handleTwice(num, lastResultsPredict, res.chance)}
                        trice={handleTrice(num, lastResultsPredict, res.chance)}
                        twice5Draws={handleTwice5Draws(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        trice5Draws={handleTrice5Draws(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        twice3Draws={handleTwice3Draws(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        trice3Draws={handleTrice3Draws(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        fourTimes={handleFourtimes(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        fiveTimes={handleFivetimes(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        once20Draw={handleOnce20draw(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                        once10Draw={handleOnce10draw(
                          num,
                          lastResultsPredict,
                          res.chance
                        )}
                      />
                      {count.map(
                        (obj) =>
                          obj.num === num && (
                            <div
                              className="flex
        "
                            >
                              <NumWrap2 num={obj.count} once10Draw />
                            </div>
                          )
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center items-center w-10 h-10 rounded-md bg-orange-400">
                    {res.chance}
                  </div>
                  <button
                    className={`${
                      lastResultsPredict.length <= 30 ? "hidden" : ""
                    } bg-red-600 flex justify-center items-center w-10 h-10 rounded-full text-white`}
                    onClick={() => setlastResultsPredict([])}
                  >
                    x
                  </button>
                </div>
              ))}
            <button
              onClick={() => {
                setlastResultsPredict([
                  ...lastResults,
                  { numbers: all, chance: 28 },
                ]);
              }}
            >
              showAll
            </button>
          </div>
        </div>
      </div>
      <div>exclude</div>
      {
        <div className="flex">
          {excludeObj.numbers.map((num) => (
            <NumWrap num={num} />
          ))}
          <div className="flex justify-center items-center w-10 h-10 rounded-md bg-orange-400">
            {excludeObj.chance}
          </div>
        </div>
      }
      <div className="flex">
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
      </div>
      <div>
        <input
          className=" bg-lime-100 max-w-lg"
          min={0}
          type="number"
          value={inputChance}
          onChange={(e) => setInputChance(e.target.value)}
        />
        <input
          className=" bg-lime-100 max-w-lg"
          min={0}
          type="number"
          value={changeInputChance}
          onChange={(e) => setChangeInputChance(e.target.value)}
        />
        <button
          className=" bg-lime-100 px-5 ml-1 max-w-lg"
          type="button"
          onClick={() =>
            handleChangeChance(lastResults, +inputChance, +changeInputChance)
          }
        >
          Change
        </button>
        <div>
          <div onClick={() => handleChancesUporDown(lastResults, 2)}>Up</div>
          <div onClick={() => handleChancesUporDown(lastResults, -2)}>Down</div>
        </div>
      </div>
      qq
      <button
        type="button"
        onClick={() => handleAddLast(lastResults, excludeObj)}
      >
        add lastresult
      </button>
      <button type="button" onClick={() => setShowClose(!showClose)}>
        ShowClose
      </button>
    </div>
  );
};

export default NumberGenerator;
