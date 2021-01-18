const textToNumberLayerThree = (num) => {
    let str = num.toString();
    let dict = {
        "1": "  |",
        "2": " |_",
        "3": " _|",
        "4": "  |",
        "5": " _|",
        "6": "|_|",
        "7": "  |",
        "8": "|_|",
        "9": "  |",
        "0": "|_|"

    }
    return dict[str];
}

module.exports = textToNumberLayerThree;