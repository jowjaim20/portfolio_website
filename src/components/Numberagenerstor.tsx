import React, { useEffect, useState, useSyncExternalStore } from "react";
import { json } from "stream/consumers";
interface Exclude {
  numbers: number[];
  chance: number;
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
}> = ({ num, include = true, includeAll = false, single = false }) => {
  const id: any = num.toString();
  return (
    <div
      className={`${
        numColor[id]
      } flex justify-center items-center text-lg font-bold rounded-full ${
        single
          ? " border-2"
          : includeAll
          ? "  bg-pink-600"
          : include
          ? " bg-sky-900"
          : " bg-purple-700"
      } w-10 h-10 p-2`}
    >
      {num}
    </div>
  );
};
const NumberGenerator = () => {
  const [lastResults, setlastResults] = useState<Exclude[]>([]);
  const [excludeObj, setExcludeObj] = useState<Exclude>({
    numbers: [],
    chance: 0,
  });
  const [input, setInput] = useState("");
  const [inputChance, setInputChance] = useState("");
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [maxNumber, setMaxNumber] = useState<number>(59);
  const [reload, setReload] = useState(false);
  const [exclude, setExclude] = useState<number[]>([]);
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

  useEffect(() => {
    const data = localStorage.getItem(maxNumber.toString());
    const data2 = data !== null ? JSON.parse(data) : [];
    //console.log(data2);
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
        if (num <= 10 && !winningNum.includes(random)) {
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
        chance: parseInt(inputChance),
      });
      setInput("");
    }
  };
  const handleAddLast = (lastResults: Exclude[], excludeObj: Exclude) => {
    const data = [...lastResults, excludeObj];
    handleExclude(data);
    setlastResults(data);
    localStorage.setItem(
      maxNumber.toString(),
      JSON.stringify([...lastResults, excludeObj])
    );
    setExcludeObj({ numbers: [], chance: 0 });
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
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex">
        {game.map((num) => (
          <div
            className=" flex justify-center items-center text-lg font-bold rounded-full bg-lime-500 w-10 h-10 p-2"
            onClick={() => setMaxNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        {lottoNumbers.map((num) => (
          <NumWrap
            num={num}
            include={included(exclude, num)}
            includeAll={includedAll(lastResults, num)}
          />
        ))}
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
        <div>last result</div>
        {lastResults
          .sort((a, b) => a.chance - b.chance)
          .map((res) => (
            <div className="flex">
              {res.numbers.map((num) => (
                <NumWrap num={num} single={handleSingle(num, lastResults)} />
              ))}
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-orange-400">
                {res.chance}
              </div>
              <button
                className=" bg-red-600 flex justify-center items-center w-10 h-10 rounded-full text-white"
                onClick={() => handleRemove(res.chance)}
              >
                x
              </button>
            </div>
          ))}
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

        <button type="button" onClick={handleAddExclude}>
          add
        </button>
      </div>
      <input
        min={0}
        type="number"
        value={inputChance}
        onChange={(e) => setInputChance(e.target.value)}
      />

      <button
        type="button"
        onClick={() => handleAddLast(lastResults, excludeObj)}
      >
        add lastresult
      </button>
    </div>
  );
};

export default NumberGenerator;