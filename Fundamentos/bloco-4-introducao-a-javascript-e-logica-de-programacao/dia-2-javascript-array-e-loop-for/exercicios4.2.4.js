//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index]
    med = sum / 2
}
console.log(sum);
console.log(med);

if(med > 20){
    console.log("Maior que 20");
}else{
    console.log("Valor igual ou menor que 20");
}