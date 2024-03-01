// function romanNumerals(number) {


//     var numberArray = number.toString().split("").reverse();


//     var result = "";


//     var numerals = [


//         ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],


//         ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],


//         ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],


//         ["", "M", "MM", "MMM", "MV", "V̅", "V̅I", "V̅II", "V̅III", "IX"]
//     ];




//     for (var i in numberArray) {
//         console.log(numerals[i][parseInt(numberArray[i])]);
//         result = numerals[i][parseInt(numberArray[i])] + result;

//     }


//     return result;

// }


// var res = romanNumerals(19);

// console.log(res);






var rim = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   6    vi  4 -iv
var value = 4;
var result = "";

for (let i = 0; i < rim.length; i++) {
    //console.log(rim[i]);
    while (value >= arab[i]) {
        //  console.log(arab[i])
        value = value - arab[i];
        result += rim[i]
    }
}

console.log(result);