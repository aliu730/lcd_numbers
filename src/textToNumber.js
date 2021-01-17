const textToNumber = (num) => {
    let str = num.toString();
    let dict = {
        "1": " \n |\n |",
        "2": " _\n _|\n|_"
    }
    return dict[str];
}
let arr = [];
arr.push(textToNumber(1));
arr.push(textToNumber(2))
console.log(arr.join(" "))

module.exports = textToNumber;