//! type1:- maximum number of an array without reduce
/*
const arr = [1,2,3,4,5]
let max =0;
for(let i=0;i<=arr.length-1;i=i+1){
    if(arr[i]>max){
        max= arr[i]
    }
}
console.log(max);
*/
//! type2:- maximum number of an array without reduce
/*
const arr = [1,2,3,4,5]
console.log(Math.max(...arr));
*/

//! using reduce for maximum number of an array
/*
const arr = [1,2,3,4,5]
const result = arr.reduce((max,i)=>{
    if(i>max){
        max =i
    } 
    return max
},0)
console.log(result);
*/
//! using reduce for maximum number of an array
/*
const arr = [1,2,3,4,5]
const result = arr.reduce((acc,i)=>{
    return Math.max(acc,i)
},0)
console.log(result);
*/
//! without return
/*
const arr = [1,2,3,4,5]
const result = arr.reduce((acc,i)=>Math.max(acc,i),0)
console.log(result);
*/

//!sum of an array without reduce
/*
const arr = [1,2,3,4,5]
let sum =0;
for(let i=0;i<arr.length;i++){
    sum = sum+arr[i]
}
console.log(sum);
*/
//!sum of an array with reduce
/*
const arr = [1,2,3,4,5]
const result = arr.reduce((acc,i)=>{
    return acc+i
},0)
console.log(result);
*/

//!sum of an array with reduce without return
/*
const arr = [1,2,3,4,5]
const result = arr.reduce((acc,i)=>acc+i,0)
console.log(result);
*/
//!product of an array without reduce
/*
const arr3 = [1,2,3,4,5]
let mul = 1;
for(let i=0;i<arr3.length;i++){
    mul = mul*arr3[i]
}
console.log(mul);
*/
//!product of an array with reduce
/*
const arr = [1,2,3,4,5]
const res = arr.reduce((mul,i)=>{
    return mul*i
},1)
console.log(res);
*/

//!product of an array with reduce without return
/*
const arr = [1,2,3,4,5]
const res = arr.reduce((mul,i)=>mul*i,1)
console.log(res);
*/