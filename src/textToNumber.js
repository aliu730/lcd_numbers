const textToNumberLayerThree = require("./lcdNumberLayerThree");
const textToNumberLayerTwo = require("./lcdNumberLayerTwo");
const textToNumberLayerOne = require("./lcdNumberLayerOne");

const numberToLcd = (num) => {
    if (!num) {
        return "";
    }
    let layerOne = "";
    let layerTwo = "";
    let layerThree = "";
    let strNumber = num.toString();
    for (let i = 0; i < strNumber.length; i++) {
        layerOne += textToNumberLayerOne(num[i]);
        layerTwo += textToNumberLayerTwo(num[i]);
        layerThree += textToNumberLayerThree(num[i]);
    }
    return layerOne + '\n' + layerTwo + '\n' + layerThree;
}

console.log(numberToLcd("1234567890"))

module.exports = numberToLcd;