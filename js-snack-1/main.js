

//Snack 1
//1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//- Codice giocatore
//- Nome
//- Cognome
//- Età
//- Media punti fatti per partita
//- Percentuale di successo per tiri da 3 punti2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
//- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//- la media punti fatti per partita deve essere compresa tra 0 e 50
//- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100. Stampare Nome, cognome, età e codice giocatore.
//4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
//5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.



//.1
//.4

const player = [
    {
        code: getCode(),
        name: 'Kobe',
        lastName: 'Bryant',
        age: 43,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Albert',
        lastName: 'Bryant',
        age: 23,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Kobe',
        lastName: 'Bryant',
        age: 43,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Mister',
        lastName: 'Bryant',
        age: 43,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Andre',
        lastName: 'Bryant',
        age: 28,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Malù',
        lastName: 'Bryant',
        age: 33,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Lucas',
        lastName: 'Bryant',
        age: 40,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Paul',
        lastName: 'Bryant',
        age: 25,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Mapo',
        lastName: 'Bryant',
        age: 18,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    },
    {
        code: getCode(),
        name: 'Koli',
        lastName: 'Bryant',
        age: 33,
        media: getRandom(0,50),
        percentage: getRandom(0,100),
    }
];

console.table(player);


//.3
const { name , lastName , age , code} = player;
// console.log(`Il giocatore ${name} ${lastName} ha ${age} anni ed il suo codice è ${code}`);



//.5
const totPlayers = player.filter( (player) => player.media > 35 && player.percentage > 80 );
console.table(totPlayers);
console.log(totPlayers.length);



/**
 * Genera numeri interi
 */

function getRandom(min , max) {
    return Math.floor(Math.random() * (max - min + 1 ) ) + min;
};


/**
 * Genera codice Player
 */
function getCode() {
    const chars = 'ABCDEFGHILMNOPQRSTUVZ';
   

    let getChars = '';
    let getNum = '';

    for(let i = 0; i < 3; i++) {
        //chars
        getChars += chars.charAt( getRandom(0, chars.length - 1) );

        //numbers
        getNum += getRandom(0, 9);
    }  
    return getChars + getNum;
}



