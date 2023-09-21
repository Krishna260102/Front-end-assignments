const keyValuePairs = [['key1', 'value1'], ['key2', 'value2']];
const myObject: Record<string, string> = {};

keyValuePairs.forEach(([key, value]) => {
    myObject[key] = value;
});

console.log(myObject);