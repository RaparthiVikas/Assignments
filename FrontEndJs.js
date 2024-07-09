// Assignment FrontEnd Js
// 1. how to integrate css file in html file: using <link> tag


// 2. How do you make a new paragraph in HTML: using p tag 


// 3. Div tag is a inline-block element: false


// 4. Span is an inline-block element: true 


// 5. What is the output of following code
// function ValueOfC(){
// var y = 10;
// var c = y ** y
// console.log(c);
// return c;
// }
// ValueOfC(): (C) 10000000000


// 6. 
// const people = [
// { id: 1, name: 'John', age: 30 },
// { id: 2, name: 'Jane', age: 25 },
// { id: 3, name: 'Bob', age: 40 },
// ]; 

// A) const names = people.map(person => person.name);
// console.log(names); // Output: ['John', 'Jane', 'Bob']

// B) const people_details = people.map(person => ({
//     id: person.id,
//     name: person.name,
//     age: person.age,
//     salary: 50000,
//   }));
//   console.log(people_details);

// C) const peopleAb30 = people.filter(person => person.age > 30).map(person => ({
//     name: person.name,
//     age: person.age,
//   }));
//   console.log(peopleAb30);


// 7. Code:
// function main(cb1, cb2, x, y) {
//     const sum = cb1(x, y);
//     const difference = cb2(x, y);
//     console.log(`The sum of ${x} and ${y} is ${sum}`);
//     console.log(`The difference of ${x} and ${y} is ${difference}`);
// }

// function cb1(a, b) {
//     return a + b;
// }

// function cb2(a, b) {
//     return a - b;
// }

// main(cb1, cb2, 11, 4);


// 8. 
// var users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//     ];
// Ans: C) Map fucntion


// 10. 
// var arr = [1, 2, 3, 4, 5].filter(func);
// function func(v) {
//   return false;
// }
// Output: C) []


// 11. what is the key difference between these two
// properties?
// Ans: B) display : none removes the element from the dom
// while visibility : hidden just hides the element


// 12.
// var a = 1;
// var b = 0;
// while (a <= 3)
// {
// a++;
// b += a * 2;
// console.log(b);
// }
// Output: A) 4 10 18


// 13. 
// var arr = [1,2,3,4]
// arr.unshift(100)
// arr.shift()
// Output: A) [1, 2, 3, 4]