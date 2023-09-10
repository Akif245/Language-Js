const driving = new Promise (function (resolve,reject) {
          const age=20
if( age>=18)
 resolve(age)

reject("you cannot drive")

});  
driving
.then ((data) => {
          console.log(" now you can drive because you are" , data);
})
.catch ((data) => {
          console.log(data);
})
.finally (() => {
          console.log("you can go for ride",);
})