// Задача 1.
for ( let i= 1; i <= 20; i++) {
  if(i % 4 === 0){
    continue;
  }
  console.log(i);
}

// Задача 2.
const n = +prompt ("Укажите любое число:");
let factorial = 1;

for (let b = 1; b <= n; b++) {
  factorial *= b;
}

console.log(`Факториал числа ${n} равен ${factorial}`);
alert (`Факториал числа ${n} равен ${factorial}`);

// *Задача 3.
const size = 8;
let board = '';

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      board += 'Ч';
    } else {
      board += 'Б';
    };
  }

  board += '\n';
}

console.log(board);
