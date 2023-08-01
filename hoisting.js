a=10;
var a;
let a;// let cannot be used for hoisting
console.log(typeof(a));
console.log(a);

console.log(3 - - "3");
 
//spread operator
var arr=[];
arr=[1,2,3,4];
var arr1=[...arr,5,6,7];
console.log(arr);
console.log(arr1);