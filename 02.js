function checkNumber(value){
    if (typeof(value) === "number" && !Number.isNaN(value)) {
        return `${value} is a number`
    } else {
        return `${value} isn't a number`
    }
}

console.log(checkNumber(2));

// simply cleaner version returns true or false based on the value

function cleanCheckNumber(value){
    return typeof(value) === "number" && !Number.isNaN(value);
}

console.log(cleanCheckNumber(4))