// Задача 1.

let a = 2;

if (a % 2 === 0) { 
  console.log('Число четное');
} else {
  console.log('Число нечетное')
};

// Задача 2.

let age = 66;

let discount = age < 18 ? 10 : (age >= 18 && age <= 65) ? 20 : 30;

const massage = `Скидка ${discount}%`;

console.log(massage);

//*Дополнительное задание

let year = 38;
let rebate;

switch (true) {
  case (year < 18) :
    rebate = 10;
    break;
  case (year >= 18 && year <= 65) : 
    rebate = 20; 
    break;
  case (year > 65) : 
    rebate = 30;
    break;
}

const massageDiscount = `Скидка ${rebate}%`;

console.log(massageDiscount);

// Задача 3.

const username = prompt(`Введите имя пользователя(admin или user):`);
const password = prompt(`Введите пароль:`);

if ((username === `admin` || username === `user`) && password === `123456`) {
  alert(`Доступ разрешен`);
} else {
  alert(`Доступ запрещен`);
}

// Задача 4.

const weight = +prompt(` Укажите вес посылки (в килограммах)`);
const delivery = prompt(` Укажите тип доставки (Стандарт, Экспресс, Премиум)`);

if (weight <= 0) {
  alert('Некорректный вес посылки');
} else {
  const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
  let coefficient;

  switch (delivery) {
    case `Стандарт`:
      coefficient = 1;
      break;
    case `Экспресс`:
      coefficient = 1.5;
      break;
    case `Премиум` :
      coefficient = 2;
      break;
    default:
      alert(`Неверный тип доставки`);
      coefficient = null;
  }
  
  if (coefficient !== null) {
    const finalCost = baseCost * coefficient;
    alert(`Итоговая стоимость доставки: ${finalCost}$`);
  }
}