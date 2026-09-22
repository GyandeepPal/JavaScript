// let arr = [1, 2, 3,]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] ** 2)

// }
// console.log(newArr);


// let arr = [1, 23, 4, 45, 5, 5]
// let r = arr.map((e) => {
//     return e * 2
// })

// console.log(r);




// first element of arr
// let arr = [10, 20, 30, 40];

// console.log(arr[0]);

// Q1.Output kya hoga ?

//     let a = 11;
// let b = 33;
// console.log(a + b);


// Q2.Array ka second element print karo

// let arr = [1, 2, 34, 4, 5]
// console.log(arr[1]);


// Q3. String ko uppercase me convert karo

// let c = "gyan"
// console.log(c.toUpperCase());


//  String ko lowercase me convert karo

//  let c = "GAYN"
// console.log(c.toLowerCase());


// String ko uppercase me convert karo

// let college = "Baderia Global";
// console.log(college.toUpperCase());


// let arr = [10, 20, 30];
// arr.unshift(5);
// arr.shift()
// console.log(arr);



// let str = "JavaScript";
// console.log(str.length - 1);
// console.log(str[str.length - 1]);

// let arr = [5, 10, 15, 20];

// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr.length-1);
// console.log(arr[arr.length - 1]);



// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(30));

// let arr = [10, 20, 30, 40];
// console.log(arr.includes(30)); // arr me present hai to true nhi to false
// console.log(arr.includes(50)); //false


// let arr = [5, 10, 15, 20];
// console.log(arr.slice(1, 3));  //slice(start, end)


// let arr = [5, 10, 15, 20];
// console.log(arr.slice(2, 4));



// let arr = [10, 20, 30, 40];
// let x = arr.slice(1, 3);  // it ca't change the original arr.   slice  → copy karta hai ✂️
// console.log(x);   // [20, 30]
// console.log(arr); // [10, 20, 30, 40]


// let arr = [10, 20, 30, 40];
// arr.splice(1, 2); //it can change original arr.    splice → kaat deta hai 🪓
// console.log(arr);



// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 6);
// console.log(arr);
// console.log(arr.length);



// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 99);

// // splice(1, 0, 99):
// // Index 1 par jao (2 se pehle)
// // 0 elements delete karo
// // 99 insert karo

// console.log(arr);
// console.log(arr.length);
// console.log(arr);





// let arr = [10, 25, 30, 45, 50];
// filter()       // condition true wale elements rakhta hai
// let ans = arr.filter((x) => x >= 30);

// console.log(ans);



// let arr = [1, 2, 34, 4, 5]

// let abx = arr.map((e) => e + 1)
// console.log(abx);

// map()          // har element ko transform karta hai
// filter()       // condition true wale elements rakhta hai
// find()         // pehla matching element deta hai
// reduce()       // poore array ko ek value me convert


// let arr = [1, 2, 34, 4];
// //reduce()  poore array ko ek value me convert
// let a = arr.reduce((a, b) => a + b)
// console.log(a);


// let arr = [1, 2, 3, 4];

// let ans = arr
//   .filter((x) => x % 2 === 0)
//   .map((x) => x * 10);

// console.log(ans);



// let arr = [1, 2, 3, 4, 5];

// let ans = arr
//   .filter((x) => x > 2)
//   .map((x) => x * 2);

// console.log(ans);



// let arr = [10, 15, 20, 25];

// let ans = arr
//   .filter((x) => x % 2 === 0)
//   .map((x) => x + 5);

// console.log(ans);



// let arr = [2, 4, 6, 8];

// let ans = arr
//   .map((x) => x / 2)
//   .filter((x) => x > 2);

// console.log(ans);


// let arr = [5, 10, 15, 20];

// let ans = arr.find((x) => x > 12);

// console.log(ans);


// let arr = [1, 2, 3, 4];

// let ans = arr.reduce((a, b) => a + b);

// console.log(ans);



/* <object */

// let student = {
//     name: "Gyan",
//     age: 20
// };

// delete student.age;

// console.log(student.age);



// function sum(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// sum(1, 2, 3, 4, 5);


// let student = {
//     name: "Gyan",
//     age: "22"

// };
// let {name, age}=student;      //Destructuring
// console.log(name);
// console.log(age);



// let arr = [1,2,3]
// let arr1=[...arr,2,3]
// console.log(arr1);



// function test(a, ...rest) {
//   console.log(a);
//   console.log(rest);
// }

// test(10, 20, 30, 40);


// let arr=[1,3,3,4,4,5,6]
// arr.forEach(element => {
//     console.log(element);
// });


// let arr = [1,2,3]
// arr.forEach((element) => {
//     console.log(element*2);
    
// });



// Object.keys()=>Object ki sari keys deta hai.


// let student={
//     name:"Gyan",
//     branch:"CSE",
//     age:33
// }
// console.log(Object.keys(student)); 
// console.log(Object.values(student));
// console.log(Object.entries(student));





let student = {
    name: "Gyan",
    age: 20
};

console.log(Object.entries(student));