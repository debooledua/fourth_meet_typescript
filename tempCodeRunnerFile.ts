const input: string = prompt("Введи число та тип (наприклад: '100 card')");
const parts = input.trim().split(" ");
const number = Number(parts[0]);
const type = parts[1] as 'C' | 'F';
if (isNaN(number)) {
  console.log("Помилка: перше значення не є числом");
} else if (!['C', 'F'].includes(type)) {
  console.log("Помилка: невідомий тип ");
}
// Tип С - F
console.log(type) 