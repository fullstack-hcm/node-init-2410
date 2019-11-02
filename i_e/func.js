let demo = (a, b) => {
    return `total: ${Number(a) + Number(b)}`
}
let demo2 = (a, b) => {
    return `total2: ${Number(a) + Number(b)}`
}

let SEND_MESSAGE = `SEND_MESSAGE`; //CONSTANTS

// module.exports = demo2;
exports.DEMO_FUNC = demo;
exports.DEMO2_FUNC = demo2;