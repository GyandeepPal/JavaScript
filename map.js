// let arr =[1,2,3,4,5]
// let newarr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
// newarr.push(element**2)    
// }
// console.log(newarr);


//short form



// let newarr=arr.map((e , index, array)=>{
//     return e**3
// })
// console.log(newarr);

//filter Array


// let arr =[1,2,3,4,5]
// let newarr=arr.filter((e)=>{
//     return e<=3
// })
// console.log(newarr);


let arr = [1, 2, 3, 45, 6, 6, 7,]

const greaterThanSeven = (e) => {
    if (e < 4) {
        return true
    }
    false
}
console.log(arr.filter(greaterThanSeven));



//reduse Array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
const red = (a, b) => {
    return a || b
}
console.log(arr2.reduce(red));
