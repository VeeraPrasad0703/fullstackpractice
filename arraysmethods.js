var arr=['veera','prasad'];
console.log(arr);
// arr=[];
arr.splice(0,arr.length);
// arr.length=0; //makes array empty but memory will not be deleted
console.log(arr);

// //array push

arr.push("singiri");
arr.push("neeraj");
arr.push("kumar");
console.log(arr);

// //pop
console.log(arr.pop());
console.log(arr);
console.log(arr.pop("singiri")); //always removes last element
arr.push("singiri");
arr.push("neeraj");
arr.push("kumar");

// //slice
console.log(arr);
console.log(arr.slice(2,3));
console.log(arr.slice(1,1));

// //splice
arr.splice(1,2,"sujatha","ramesh");
// 1 implies position to be inserted and 2 implies 
// how many elements to be deleted from the start index
console.log(arr);

// //sort
arr.sort();
console.log(arr);

//array is also a object type
var a = new Array("kndgoi", "hfiodshfi", "fddfknghosdfhg");
console.log(typeof(a));

