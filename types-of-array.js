// // console.log(num.toString);
// // console.log(num);
// // num.pop()
// // console.log(num);
// // num.push(7)
// // console.log(num.length);
// // num.shift()
// // console.log(num.length);
// // console.log(num);
// // console.log(num.length);
// // num.unshift(76)
// // console.log(num);
// // console.log(num.length);
// // console.log(delete num[3] );
// // console.log(delete num[4] );
// // console.log(num);
// // num.sort()
// // console.log(num);
// // let compare=(a,b)=>
// // return (a-b)
// // }
// console.log(num.reverse());
// console.log(num);
// let num = [0,1,2,33,4,5,];
// for (let i = 0; i < num.length; i++) {
//          console.log( num[i]); 
// }
                                                             //{ for each loop}
// num.forEach(element => {
// console.log(element*element);          
// });
                                                              // { for of loop}
// for (let i of num)
// console.log([i]);
                                                              // {for in loop}
// for (let i in num)
// console.log([i]);
// var a = ["dog","cat"]
// a.forEach(a=>{
             
//           console.log(a+"can eat" & a+"can drink" & a + "can breath")
// });
//  let a =  function action(a,b) {
     
//           return( a+ " "+ "can drink" + "and" + " " + a+  "can eat" + " and" + " " + b+ "can breath")    
// }
//   d = "dog"
//   e = "cat"

// console.log(a(d,e));
//  let arr = ["Apple", "orange", "Banana"]
//  console.log(arr);
//  Parameter = value pass
// function operation(a,b){ 


//   console.log(a+b);
//   console.log(a-b);
//   console.log(a*b);
//   console.log(a/b);
// }
// c = 10;
// d = 20;
// // argument = value 
// console.log( operation(10,20));
// function operation(a,b,c) {
//   return(a+b+c)//a+b+c=60,,,,,a-b-c=0
// }
// x=30
// y=20
// z=10
// console.log(operation(x,y,z));
                                                                    // switch case 
function calculator(a,b,c) {

  let calculator = c

  switch (calculator) {
  case 1:
  console.log(a+b);
  break;

case 2:
console.log(a-b);
break; 

case 3:
  console.log(a*b);
  break;

  case 4:
    console.log(a/b);
    break;

default : 
break;
  } 

   
}
let  x=10
let  y=20
console.log(calculator(x,y,4));

