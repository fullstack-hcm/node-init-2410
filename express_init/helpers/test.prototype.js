let lodash = require('lodash');

function demo() {
    console.log(`hello x`);
}

function demo2(){
    console.log(`hello y`);
}

let arrStart = [demo, demo2];

let arrCopy = lodash.cloneDeep(arrStart);

arrCopy.push(demo);

console.log({ arrCopy, arrStart });