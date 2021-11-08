

//Snack 2
//A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
//Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]



const numbers = [3, 5, 7, 10, 13 ];
console.log(numbers);


//nuovo array

const newNumbers = numbers.map((element)  => {
    console.log(element);
    
    if (element % element === element);
    return element * 2;
    
});

console.log(newNumbers);