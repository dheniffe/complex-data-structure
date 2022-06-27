/// Crie um array que receba 5 itens e exiba no console.
const color = ["azul", "verde", "amarelo", "branco", "preto"];

// Utilize um método para adicionar um nome ao inicio do array.
color.unshift("rosa");

// Utilize um método para remover o último nome do array.
color.pop();

// Utilize um método para adicionar dois nomes ao fim do array.
color.push("marrom", "roxo");

// Utilize um método para remover o primeiro nome do array.
color.shift();
console.log(color);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort();
console.log(numbers);
