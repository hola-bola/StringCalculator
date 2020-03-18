const stringCalculator = function(numberString) {
    if (numberString === "") {
        return 0;
    };
    //"//;\n1;2"
    if (numberString.startsWith("//")) {
        // let seperator = numberString.substring(2, 3);
        // numberString = numberString.substring(3);
        var separator = ";";
        var reg = new RegExp(separator, "g");
        numberString.replace(reg, ",");
        console.log(numberString);
    }

    // var separator = ";";
    // var regex = new RegExp(separator, "g");

    // var input = "1;2";
    // var output = input.replace(regex, ",");
    // alert(output); 

    const numbersBefore = numberString.replace(/\n/g, ",");
    const numbers = numbersBefore.split(",");

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