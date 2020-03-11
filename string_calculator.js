const stringCalculator = function(numberString) {
    if (numberString === "") {
        return 0;
    };
    const numbers = numberString.split(",");
    if (numbers.length === 1) {
        return Number(numbers[0]);
    } else {
        var total = 0;
        for (let index = 0; index < numbers.length; index++) {
            total += Number(numbers[index])
        }
        return total
    }
};

module.exports = stringCalculator;