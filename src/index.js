module.exports = function toReadable (number) {
    const hundreds = ["", "one hundred ", "two hundred ", "three hundred ", "four hundred ", "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "];
    const tens = ["", "not used", "twenty ", "thirty ", "forty ","fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    const first_ten = ["ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen", "nineteen "];
    const numbers = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if(number == 0) {
        return "zero";
    }

    let hundredNumber = Math.floor(number / 100);
    let result = hundreds[hundredNumber];
    let tensNumber = Math.floor((number % 100) / 10);
    let lastDigit = number % 10;
    if (tensNumber == 1) {
        result += first_ten[lastDigit];
    }
    else {
        result += tens[tensNumber] + numbers[lastDigit];
    }
    return result.trim();
}
