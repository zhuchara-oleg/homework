const firstName = "Олег";
const lastName = "Жук";
const isStudent = true;

const age = 27;
const currentYear = 2026;
const birthYear = currentYear - age;

console.log(birthYear);

const studentStatus = isStudent ? "да" : "нет" ;
const message = `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${studentStatus}. ` ;

console.log(message);

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

console.log(result);