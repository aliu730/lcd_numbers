const textToNumberLayerThree = require("./lcdNumberLayerThree");
const textToNumberLayerTwo = require("./lcdNumberLayerTwo");
const textToNumberLayerOne = require("./lcdNumberLayerOne");

const numberToLcd = (num) => {
    if (!num) {
        return "";
    }

    let dict = {
        "1": ["   ", "  |", "  |"],
        "2": [" _ ", " _|", "|_ "],
        "3": [" _ ", " _|", " _|"],
        "4": ["   ", "|_|", "  |"],
        "5": [" _ ", "|_ ", " _|"],
        "6": [" _ ", "|_ ", "|_|"],
        "7": [" _ ", "  |", "  |"],
        "8": [" _ ", "|_|", "|_|"],
        "9": [" _ ", "|_|", "  |"],
        "0": [" _ ", "| |", "|_|"]
    }

    let layerOne = "";
    let layerTwo = "";
    let layerThree = "";
    let strNumber = num.toString();
    for (let i = 0; i < strNumber.length; i++) {
        layerOne += dict[strNumber[i]][0];
        layerTwo += dict[strNumber[i]][1];
        layerThree += dict[strNumber[i]][2];
    }
    return layerOne + '\n' + layerTwo + '\n' + layerThree;
}

console.log(numberToLcd("1234567890"))

module.exports = numberToLcd;