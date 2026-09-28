// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
    {name: "Alex", age: 24, isAdmin: false },
    {name: "Bob", age: 13, isAdmin: false },
    {name: "John", age: 31, isAdmin: true },
    {name: "Jane", age: 20, isAdmin: false }
]

const newUsers = users.push(
    {name: "Ann", age: 19, isAdmin: false },
    {name: "Jack", age: 43, isAdmin: true },
)

console.log(users)

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let sum = 0
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age
        averageAge = sum / users.length
    }
    return averageAge
}

console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
    const adminUsers = []
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
    
    if (user.isAdmin === true) {
        adminUsers.push(user)
    }
}
    return adminUsers;
}

const result = getAllAdmins(users);
console.log(result)

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const newArray = [1, 2, 3, 4, 5, 6, 7]

function first(arr, n) {
  if(n === undefined) {
    if(arr.length > 0){
      return [arr[0]]
    } else {
      return []
    }
  }
  if(n === 0) {
    return []
  }

  let result = []
  for(i = 0; i < n; i++) {
    if(i >= arr.length) {
      break
    }
    result.push(arr[i])
  }
  return result
}

console.log(first(newArray, 4))
