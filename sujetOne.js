const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    const array = Array.from(data.split(/\s+/))
    const newArray = array.map(function(item){
        return parseInt (item, 10);
    })
    console.log("mon tableau", (newArray));

    console.log("-----------------------------------");
    console.log("-----------------------------------");

    const findSum = (newArray, k) => {
        for (let i = 0; i < newArray.length; i++) {
            for (let j = 0; j < newArray.length; j++) {
                if (i !== j && newArray[i] + newArray[j] === k) {
                    return true;
                };
            };
        };
        return false;
    };
    console.log(`Exercice 1, résultat en 0(n2): ${findSum(newArray, 18)}`)

console.log("-----------------------------");
console.log("-----------------------------------");
   
})

