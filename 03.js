// using Number()
let str = "20";
let convertedStr = Number(str);
console.log(convertedStr, typeof(convertedStr))

// using + unary
let unaryNum = +str;
console.log(unaryNum, typeof(unaryNum));

// using parseInt
let parseIntNum = parseInt(str);
console.log(parseIntNum, typeof(parseIntNum))

// Number and +unary is strict whereas parseInt isn't