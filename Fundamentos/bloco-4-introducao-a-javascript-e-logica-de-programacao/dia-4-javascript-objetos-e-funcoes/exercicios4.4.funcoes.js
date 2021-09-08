//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = 'arara';
function verificaPalindromo(palavra) {
    if (palavra === palavra.split('').reverse().join()) {
        console.log('True');
    } else {
        console.log('False');
    }
}

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

/*function retorno(inteiros) {
    let number = 0;
    for (let key in inteiros) {
        if(inteiros[retorno] < inteiros[key]) {
            number = key;
        }
    }
return number;
}

console.log(retorno([2, 3, 6, 7, 10, 1]));*/

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); 

  //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  //Array de teste: [2, 4, 6, 7, 10, 0, -3]; 

  function menorIndice (numbers){
      let indice = [0];
      for(let index = 1; index < numbers.length; index += 1){
          if(numbers[index] < indice){
              indice = numbers[index];
          }else {
              indice = [0];
          }
      }
      return indice;
  }
  console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));


  //4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
  //Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
  let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  function maiorNome (nomes){
      let sum = 0;
        for (index = 0; index < nomes.length; index += 1){
            sum = maiorNome[index].join(',');
        }
    return sum;
  }
  console.log(maiorNome (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

  //5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
  //Array de teste: [2, 3, 2, 5, 8, 2, 3]

  //6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
  //Valor de teste: N = 5 

  //7 - Crie uma função que receba uma string word e outra string ending . 
  //Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

