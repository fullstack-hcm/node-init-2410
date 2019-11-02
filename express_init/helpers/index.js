function calcu(cal, numA, numB){
    if (cal === 'sum') {
        return `sum ${numA} + ${numB} = ${Number(numA) + Number(numB)}`;
    } else if (cal === 'sub') {
        return `sub ${numA} - ${numB} = ${Number(numA) - Number(numB)}`;
    } else if (cal === 'div') {
        return `div ${numA} / ${numB} = ${Number(numA) / Number(numB)}`;
    } else if (cal === 'mul') {
        return `mul ${numA} * ${numB} = ${Number(numA) * Number(numB)}`;
    } else {
        return `must require calcu`;
    }
}

exports.CALCU_FUNCTION = calcu;