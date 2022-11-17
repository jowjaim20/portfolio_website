export interface Exclude {
  numbers: number[];
  chance: number;
  id?: number;
}

export interface Count {
  num: number;
  count: number;
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
export const colorsCount = [
  { number: "white", count: 0, desc: "1/20" },
  { number: "green", count: 0, desc: "1/10" },
  { number: "pink", count: 0, desc: "3/3" },
  { number: "skyBlue", count: 0, desc: "2/3" },
  { number: "darkPink", count: 0, desc: "3/5" },
  { number: "violet", count: 0, desc: "2/5" },
  { number: "black", count: 0, desc: "5/10" },
  { number: "gray", count: 0, desc: "4/10" },
  { number: "red", count: 0, desc: "3/10" },
  { number: "blue", count: 0, desc: "2/10" },
];
