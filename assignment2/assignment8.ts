function joinAndNormalizeURL(baseURL: string, ...segments: string[]): string {
    const joinedURL = new URL(segments.join('/'), baseURL);
    return joinedURL.href;
}

// Example usage:

const baseURL = 'https://nissan.com';
const segment1 = 'path1';
const segment2 = 'path2';
const segment3 = 'path3/';

const resultURL = joinAndNormalizeURL(baseURL, segment1, segment2, segment3);

console.log(resultURL);