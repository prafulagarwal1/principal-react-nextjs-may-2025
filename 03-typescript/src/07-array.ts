import type { NS } from "./05-type-alias";

// let chequeAmounts : Array<number> = [];

// use case 1 -> only numbers / only strings
// as number[] -> "type assertion" -> like type casting
let chequeAmounts: number[] | string[] = [] as number[];
chequeAmounts.push(1000);
chequeAmounts.push(2000);

// chequeAmounts.push("Three Thousand");
chequeAmounts = ["Three Thousand"];
// chequeAmounts = [ true ];

// numbers and strings can coexist in the same array
// let chequeAmounts: (number | string)[] = [];
// let chequeAmounts: NS[] = [];

// chequeAmounts.push(1000);
// chequeAmounts.push(2000);
// chequeAmounts.push("Three Thousand");
