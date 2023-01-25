// create a double function that will receive a number as an argument, and return the number multiplied by 2

const double = (num) => {
    return num * 2
};

// const double = (num) => {
//     num = num * 2
//     return num
// };

// console.log(double(800));
// let primitiveNum = 5
// console.log(primitiveNum)
// let result = double(primitiveNum)
// console.log("result = " + result)
// console.log(primitiveNum)


function changeName(human) {
    human.name = "Nigar"
    return human
}

let person = {
    "name": "Jason"
}
let person1 = person

console.log(person)
console.log(person1)
let person2 = changeName(person);

console.log(person)
console.log(person1)
console.log(person2)



