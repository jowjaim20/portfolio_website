export interface Exclude {
  numbers: number[];
  chance: number;
  id?: number;
  comb?: string;
}

export interface Count {
  num: number;
  count: number;
}

export interface Desc {
  number: string;
  count: number;
  desc: string;
}

export interface CountI {
  number: string;
  count: number;
  desc: string;
}

export interface Color {
  number: number;
  color: string;
}
export const game = [42, 45, 49, 55, 58];
export const date = new Date();

export const gameName: any = {
  "42": "Lotto ",
  "45": "Mega Lotto ",
  "49": "Super Lotto ",
  "55": "Grand Lotto ",
  "58": "Ultra Lotto ",
};

export const schedule = [
  { day: "Mon", game: [45, 55] },
  { day: "Tue", game: [42, 49, 58] },
  { day: "Wed", game: [45, 55] },
  { day: "Thu", game: [42, 49] },
  { day: "Fri", game: [45, 58] },
  { day: "Sat", game: [42, 55] },
  { day: "Sun", game: [49, 58] },
];

export interface ColorObject {
  count: number;
  draws: number;
  color: string;
  hex: string;
  id: number;
}

export const colorObj: ColorObject[] = [
  {
    count: 5,
    draws: 5,
    color: "5/5",
    hex: "#00FF08",
    id: 1,
  },
  {
    count: 4,
    draws: 4,
    color: "4/4",
    hex: "#FF00F7",
    id: 2,
  },
  {
    count: 3,
    draws: 3,
    color: "3/3",
    hex: "#FF0800",
    id: 3,
  },
  {
    count: 2,
    draws: 2,
    color: "2/2",
    hex: "#FF85A7",
    id: 4,
  },

  {
    count: 2,
    draws: 3,
    color: "2/3",
    hex: "#00F7FF",
    id: 5,
  },
  {
    count: 4,
    draws: 5,
    color: "4/5",
    hex: "#E5FFD3",
    id: 6,
  },
  {
    count: 3,
    draws: 5,
    color: "3/5",
    hex: "#FF8039",
    id: 7,
  },
  {
    count: 2,
    draws: 5,
    color: "2/5",
    hex: "#6F6EFF",
    id: 8,
  },
  {
    count: 5,
    draws: 10,
    color: "5/10",
    hex: "766500",
    id: 9,
  },
  {
    count: 4,
    draws: 10,
    color: "4/10",
    hex: "#FF4EFA",
    id: 10,
  },
  {
    count: 3,
    draws: 10,
    color: "3/10",
    hex: "#FFB537",
    id: 11,
  },
  {
    count: 2,
    draws: 10,
    color: "2/10",
    hex: "#3EFF90",
    id: 12,
  },
  {
    count: 5,
    draws: 20,
    color: "5/20",
    hex: "#760011",
    id: 13,
  },

  {
    count: 4,
    draws: 20,
    color: "4/20",
    hex: "#CBADFF",
    id: 14,
  },

  {
    count: 3,
    draws: 20,
    color: "3/20",
    hex: "#FAFF3D",
    id: 15,
  },
  {
    count: 2,
    draws: 20,
    color: "2/20",
    hex: "#FFCBAD",
    id: 16,
  },

  {
    count: 1,
    draws: 20,
    color: "1/20",
    hex: "#fff",
    id: 17,
  },
]; /*
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
      : " bg-purple-900";
  };
single={handleXdraws(num, lastResults, res.chance, 1, 10000)}
twice={handleXdraws(num, lastResults, res.chance, 2)}
trice={handleXdraws(num, lastResults, res.chance, 3)}
twice5Draws={handleXdraws(num, lastResults, res.chance, 2, 5)}
trice5Draws={handleXdraws(num, lastResults, res.chance, 3, 5)}
twice3Draws={handleXdraws(num, lastResults, res.chance, 2, 3)}
trice3Draws={handleXdraws(num, lastResults, res.chance, 3, 3)}
fourTimes={handleXdraws(num, lastResults, res.chance, 4)}
fiveTimes={handleXdraws(num, lastResults, res.chance, 5)}
once20Draw={handleXdraws(num, lastResults, res.chance, 1, 20)}
once10Draw={handleXdraws(num, lastResults, res.chance, 1)}
*/
