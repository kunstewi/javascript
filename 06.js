function writeTable(value){
    for(let i = 1; i <= 10; i++){
        console.log(`${value} x ${i} = ${value * i}`);
    }
}

console.log(writeTable(5))