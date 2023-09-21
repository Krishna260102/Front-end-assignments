function createObjectWithGeneratedKeys(obj, keyTransformer) {
    const transformedObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = keyTransformer(key);
            transformedObject[newKey] = obj[key];
        }
    }
    return transformedObject;
}
const originalObject = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
function transformKey(key) {
    return key.toUpperCase();
}
const transformedObject = createObjectWithGeneratedKeys(originalObject, transformKey);
console.log(transformedObject);
