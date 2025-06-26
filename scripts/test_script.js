// 1. Tipos de variables
let userName;
userName = 'Andres';
console.log(userName);
userName = 10;
console.log(userName);

const userType = 'admin';
console.log(userType);

// 2. Tipos de datos (typeof)
// string, number, boolean, arreglos, objetos, undefined
let userAddress;
console.log(typeof userName);
console.log(userAddress);

let userHasPermission = true;
console.log(typeof userHasPermission);

let user = {
    name: 'Andres',
    lastName: 'Rubio',
};
console.log(typeof user);
// 2.1. Cadenas literales
let userLastName = 'Rubio';
let userLastName2 = 'Torres';

console.log(userLastName + ' ' + userLastName2);
console.log(`${userLastName}-${userLastName2}.`);

// 3. Funciones
let resultado = sumar(2, 3);
function sumar(num1, num2) {
    return num1 + num2;
}

console.log(resultado);

let restar = function (num1, num2) {
    return num1 - num2;
};
console.log(restar(2, 1));

// 3.1 Arrow functions
let multiplicar = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplicar(2, 6));

let division = (num1, num2) => num1 / num2;
console.log(division(6, 3));

let getUser = () => ({
    name: 'Andres',
});
console.log(getUser());
// 3. Arreglos
let userPermissions = ['read', 'update', 'delete', 'delete'];
console.log(userPermissions[userPermissions.length - 1]);
console.log(userPermissions.length);

// 3.1 Array methods
// for (let index = 0; index < userPermissions.length; index++) {
//   console.log(userPermissions[index]);
// }
let newPermissions = userPermissions.forEach((item) => `${item}-perm`);
let newUserPermissions = userPermissions.map((item) => `${item}-perm`);
console.log(newPermissions);
console.log(newUserPermissions, userPermissions);

let nine = 9;
let nineString = '9';
// Operador estricto
console.log(nine === nineString);

let filteredPermissions = userPermissions.filter(
    (item) => item === 'read' || item == 'delete'
);
console.log(filteredPermissions, userPermissions);

let permissionString = userPermissions.join(',');
console.log(permissionString);

let numberArray = [1, 2, 3, 5];
let numberSum = numberArray.reduce((item, sum) => sum + item);
console.log(numberSum);

const deleteIndex = userPermissions.findIndex((item) => item === 'delete');
console.log(deleteIndex);

const greaterThanZero = numberArray.every((item) => item > 0);
console.log(greaterThanZero);

const oneGreaterThanZero = numberArray.some((item) => item >= 4);
console.log(oneGreaterThanZero);

userPermissions.push('create');
userPermissions.pop();
console.log(userPermissions);

const newNumberArray = [0, ...numberArray];
console.log(newNumberArray);

const no3Array = numberArray.filter((item) => item !== 3);
console.log(no3Array);

const added4ToArray = [...numberArray];
added4ToArray.splice(
    numberArray.findIndex((item) => item > 3),
    0,
    4
);
console.log(added4ToArray, numberArray);

const slicedArray = numberArray.slice(0, 2);
console.log(slicedArray);

// 5. Objetos
const userProps = {
    name: 'Andres',
    lastName: 'Rubio',
    type: 'admin',
    age: 30,
};
const userProduct = {
    productName: 'tictactoe',
    productRole: 'developer',
};

// Object.freeze(userProps);
console.log(userProps.name);
userProps.role = 'developer';
console.log(userProps.role);

const newObject = Object.assign(userProps);
console.log(newObject);

// 5.1 Destructuring
const newerObject = { ...newObject, ...userProduct };
console.log(newerObject);

const { name: userName2, lastName: lastName2 } = userProps;
console.log(userName2, lastName2);

// 5.2 Object Literal Enhancement
const otherObject = {
    userName2,
    lastName2,
};
console.log(otherObject);

// 5.3 Manipulación de objetos (delete)
delete userProps.type;
console.log(userProps);

// 6 Operadores ternarios
const isOlderThan18 = userProps.age > 18 ? true : false;
console.log(isOlderThan18);

// const lastName3 = userProps.lastName ? userProps.lastName : null;
const lastName3 = userProps.lastName ?? null;
console.log(lastName3);

// 9 Selectores de JS y Manipulación del DOM
