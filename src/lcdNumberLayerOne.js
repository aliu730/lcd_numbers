const textToNumberLayerOne = (num) => {
    let str = num.toString();
    let dict = {
        "1": "  ",
        "2": " _",
        "3": " _",
        "4": " ",
        "5": " _",
        "6": " _",
        "7": " _",
        "8": " _",
        "9": " _",
        "0": " _"

    }
    return dict[str];
}


module.exports = textToNumberLayerOne;