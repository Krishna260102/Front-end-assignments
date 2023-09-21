function createObjectWithGeneratedKeys<T>(obj: Record<string, T>, keyTransformer: (key: string) => string): Record<string, T> {
    const transformedObject: Record<string, T> = {};

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

function transformKey(key: string): string {
    return key.toUpperCase();
}

const transformedObject = createObjectWithGeneratedKeys(originalObject, transformKey);

console.log(transformedObject);