//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
//Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let INSS;
let IR;
const grossSalary = 3800.00;

//Salário bruto até R$ 1.556,94: alíquota de 8% de INSS
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

if (grossSalary <= 1556.94) {
    INSS = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    INSS = grossSalary * 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    INSS = grossSalary * 0.11;
} else if (grossSalary >= 5189.82) {
    INSS = grossSalary - 570.88
}

console.log(INSS);



//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let netSalaryINSS = grossSalary - INSS;

if (grossSalary >= 1903.99 && grossSalary <= 2826.65) {
    IR = (netSalaryINSS * 0.075) - 142.80;
} else if (grossSalary >= 2826.66 && grossSalary <= 3751.05) {
    IR = (netSalaryINSS * 0.15) - 354.80;
} else if (grossSalary >= 3751.06 && grossSalary <= 4664.68) {
    IR = (netSalaryINSS * 0.225) - 636.13;
} else if(grossSalary > 4664.68){
    IR = (netSalaryINSS * 0.275) - 869.36;
}

console.log(IR); 

// calculo do salario liquido

let netSalary = grossSalary - (INSS + IR);

console.log("Salario líquido:" ,netSalary);


