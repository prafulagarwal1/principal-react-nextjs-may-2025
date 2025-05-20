// syntax 1 -- applicable for function defined using any syntax
function add(x: number, y: number) /*: number */ {
    return x + y;
}

// syntax 2 - aplicable for function expressions, variables that refer to functions
type BinaryFunction = (x: number, y: number) => number;

const subtract: BinaryFunction = (x, y) => x - y;
const multiply: BinaryFunction = (x, y) => x * y;

// the return type is usable when 'any'
// type AjaxCallback = (response : string) => any;

// void return type -> we don't care if there is a value returned or not
// the return type is NOT usable when 'void'
type AjaxCallback = (response : string) => void;


function ajax(url: string, callback: AjaxCallback) {
    // do something
    // get response

    // const result = callback( "This is the data" ) as unknown as number;
    const result = callback( "This is the data" );

    // result + 100 // error (when returned void type)
}

ajax(
    "https://api.example.com",
    (response: string) => {
        console.log(response);
        return 10;
    }
);
