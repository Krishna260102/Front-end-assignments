var num = 1024;
const numArray = [];
while (num != 0) {
    let a = num - Math.trunc(num / 10) * 10;
    numArray.push(a);
    num = Math.trunc(num / 10);
}
console.log(numArray);
