import type { NS } from "./05-type-alias";

// the default export can be imported with any name!
import add, { chequeAmount as chqAmt} from "./05-type-alias";

let chequeAmount: NS = 1000;
// let chequeAmount: number | string = 1000;

chequeAmount = "Two thousand";

// chequeAmount = true;
// chequeAmount = {
//     name: 'ICICI Bank',
//     amount: 1000
// };

export {};
