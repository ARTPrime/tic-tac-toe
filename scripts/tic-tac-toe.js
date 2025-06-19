// 1. Tipos de variables
let userName;
userName = "Andres";
console.log(userName);
userName = 10;
console.log(userName);

const userType = "admin";
console.log(userType);

// 2. Tipos de datos (typeof)
// string, number, boolean, arreglos, objetos, undefined
let userAddress;
console.log(typeof userName);
console.log(userAddress);

let userHasPermission = true;
console.log(typeof userHasPermission);

let user = {
  name: "Andres",
  lastName: "Rubio",
};
console.log(typeof user);
// 2.1. Cadenas literales
let userLastName = "Rubio";
let userLastName2 = "Torres";

console.log(userLastName + " " + userLastName2);
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
  name: "Andres",
});
console.log(getUser());
// 3. Arreglos
let userPermissions = ["read", "update", "delete", "delete"];
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
let nineString = "9";
// Operador estricto
console.log(nine === nineString);

let filteredPermissions = userPermissions.filter(
  (item) => item === "read" || item == "delete"
);
console.log(filteredPermissions, userPermissions);

let permissionString = userPermissions.join(",");
console.log(permissionString);

let numberArray = [1, 2, 3];
let numberSum = numberArray.reduce((item, sum) => sum + item);
console.log(numberSum);

let deleteIndex = userPermissions.findIndex((item) => item === "delete");
console.log(deleteIndex);

let greaterThanZero = numberArray.every((item) => item > 0);
console.log(greaterThanZero);

let oneGreaterThanZero = numberArray.some((item) => item >= 4);
console.log(oneGreaterThanZero);

userPermissions.push('create');
userPermissions.pop();
console.log(userPermissions);
// 5. Objetos
// 5.1 Destructuring
// 5.2 Object Literal Enhancement
// 5.3 Manipulación de objetos (delete)
// 5.4 Destrucuiring multiple

// 6 Operadores ternarios
// 7 Optional chaining
// 8 Nullish coalescing

// 9 Selectores de JS y Manipulación del DOM
