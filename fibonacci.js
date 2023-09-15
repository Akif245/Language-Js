function input(a) {
let output=[];

if (a===1) {
           output = [0];      
}
else if(a===2){
          output = [0,1]
}
else{
         output=[0,1,1,2]
         for (let i = 2; i < a; i++) {
                   output.push(output[output.length -2] +output[output.length - 1] ) //=3
          
         }

}
return output;         
}
output=input(4)
console.log(output);
console.log(output.length);



