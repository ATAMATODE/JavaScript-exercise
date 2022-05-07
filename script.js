/*LECTURE:  Values and Variables

//let country = "Togo";
//let continent = "Africa";
 ///population = 8.3 
console.log(country);
console.log(continent);
console.log(population);

//Data types

//let isIsland;
//let Togo = true;
//isIsland !== Togo;
let isIsland = false;
let language ;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//let, const and var
const language = "French";
const country = "Togo";
const continent = "Africa";
const isIsland = false; */



//Basic Operators

let population = 13;
console.log(population/2);
//population++;
console.log(population);
console.log(population > 6);
console.log(population <33);
const language = 'Portuguese';
const country = 'Portugal';
const continent = 'Europe' ;
let description = country  + ' is in ' + continent +', and its '+ population +
' million people speak ' + language ;
console.log(description);

//Strings and Template Literals


/*let description  = `${country} is in ${continent} , and its ${population} million
people speak ${language}`
console.log(description);*/

//Taking decisions: if/ else  statements

if (population >33) {
console.log(`${country} 's population is above average`);}
else {
    console.log(`${country}'s population is ${33- population} million below average`,);
}

//type conversion and coercion

console.log('9' - '5'); // -> 4
 console.log('19' - '13' + '17'); // -> '617'
 console.log('19' - '13' + 17); // -> 23
 console.log('123' < 57); // -> false
 console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 114

 //Equality operators:== vs. ===

 const numNeighbours = prompt(
    'How many neighbour countries does your country have?',
    );
    // LATER : This helps us prevent bugs
    const numNeighbours = Number(
    prompt('How many neighbour countries does your country 
    have?'),
    );
    if (numNeighbours === 1) {
    console.log('Only 1 border!');
    } else if (numNeighbours > 1) {
    console.log('More than 1 border');
    } else {
    console.log('No borders');}

    //logical operators

    if (language === 'english' && population < 50 && !isIsland)
 {
 console.log(`You should live in ${country} :)`);
 } else {
 console.log(`${country} does not meet your criteria :(`)

 // The switch statement

 switch (language) {
    case 'chinese':
    case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
    case 'english':
    console.log('3rd place');
    break;
    case 'hindi':
    console.log('Number 4');
    break;
    case 'arabic':
    console.log('5th most spoken language');
    break;
    default:
    console.log('Great language too :D');}

    // The conditional (Ternary) operator
     
    console.log(
        `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,);

        