// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  firstName: 'Oleg',
  secondName: 'Zhuk',
  age: 27
}

console.log(person)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty (person) {
  if (Object.keys(person).length === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEmpty(person))


// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Заголовок",
  description: "Описание",
  isCompleted: false
}

const modification = {
  title: "Список задач",
  description: "Задачи на день",
  isCompleted: true
}

function cloneAndModify(object, modification) {
  return { ...object, ...modification}
}

const taskMod = cloneAndModify(task, modification)

for (const key in taskMod) {
  if (Object.hasOwn(taskMod, key)) {
    console.log(`${key}: ${taskMod[key]}`);
  }
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
  method1() {
    console.log('Метод 1 вызван')
  },
  method2() {
    console.log('Метод 2 вызван')
  },
  property: 'Это не метод'
}

function callAllMethods (myObject) {
  Object.keys(myObject).forEach(key => {
  const value = myObject[key];
  if (typeof value === 'function') {
    value.call(myObject);
  }
});
}

console.log(callAllMethods(myObject))