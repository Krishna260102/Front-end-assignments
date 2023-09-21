function invokeFunctions(...functions: ((...args: any[]) => any)[]): any[] {
    return functions.map(func => func());
}


function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

const results = invokeFunctions(
    () => add(2, 3),
    () => subtract(5, 2),
    () => multiply(3, 4)
);

console.log(results);