function bmicalculator(weight,height) {
          var bmi =weight / Math.pow(height,2)
          return bmi;
}              





var bmi=bmicalculator(80,1.8)    
console.log(Math.round(bmi));
