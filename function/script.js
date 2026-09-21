// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(basePrice, discount, taxRate) {
  const discountAmount = basePrice * (discount / 100)
  const priceAfterDiscount = basePrice - discountAmount
  const taxAmount = priceAfterDiscount * (taxRate / 100)
  const finalPrice = priceAfterDiscount + taxAmount
  
  console.log(finalPrice)
}

calculateFinalPrice(100,10,0)

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess (userName, password) {
  if (userName === 'admin' && password === '123456') {
    return 'Доступ разрешен'
  } else {
    return 'Доступ запрещен'
  }
}

const result = checkAccess('admin', '123456')
console.log(result)

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay (timeOfDay) {
  return (timeOfDay >= 0 && timeOfDay <= 5) ? 'Ночь' : (timeOfDay >= 6 && timeOfDay <= 11) ? 'Утро'
  : (timeOfDay >= 12 && timeOfDay <= 17) ? 'День' : (timeOfDay >= 18 && timeOfDay <= 23) ? 'Вечер'
  : 'Некорректное время'
}

const resultTimeOfDay = getTimeOfDay(18)
console.log(resultTimeOfDay)

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven (start, end) {
  for(let i = start; i <= end; i++) {
    if(i % 2 === 0){
      return i
    }
  }

  return 'Четных чисел нет'
}

const resultFindFirstEven = findFirstEven (13, 15)
console.log(resultFindFirstEven)