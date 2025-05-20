// export type NS = number | string;
type NS = number | string;

let chequeAmount: NS = 1000;

let dBngMys: NS = 140;

dBngMys = "Ninety miles";

// export default (x: number, y: number) => x + y;
const sum = (x: number, y: number) => x + y;

export default sum;

// types
export type { NS /*sum as default*/ };

// values
export { chequeAmount };
