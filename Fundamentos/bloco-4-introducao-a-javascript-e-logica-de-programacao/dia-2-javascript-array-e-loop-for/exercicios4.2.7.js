//Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0];

for( let index = 1; index < numbers.length; index += 1){
    if(numbers[index] < smallerNumber){
        smallerNumber = numbers[index];
    }
}
console.log(smallerNumber);