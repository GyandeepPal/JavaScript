//FUNCTION ARE REUSIBLE
function pal(Gyanbhai) {
    console.log("Hey " + Gyanbhai + " How are you ");
    console.log("Hey " + Gyanbhai + " who are you ");
    console.log("Hey " + Gyanbhai + " are tou so cute ");
    console.log("Hey " + Gyanbhai + " your teacher is so good ");

}

pal("Rahul bhai kaise ho ")


// 


function sum(a, b, c = 4) {
    console.log(a, b, c);

    return a + b + c
}
result = sum(4, 5)
result1 = sum(43, 5)
result2 = sum(4, 2)
result3 = sum(45, 5)
console.log("the sum of these number's:", result);
console.log("the sum of these number's:", result1);
console.log("the sum of these number's:", result2);
console.log("the sum of these number's:", result3);



//



let fun1 = (x) => {
    console.log("I am Arrow functon:", x);

}

fun1(55)
fun1(5)
fun1(5e5)
fun1(552)