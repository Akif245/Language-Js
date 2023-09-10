const ticket = new Promise(function (resolve, reject) {

          const isBoarded = false;
          if (isBoarded) {
                    resolve(" You are not in the flight ");
          }
          else{
                    reject("Your flight has been cancelled");
          }
          
});

ticket
.then((data) => {
          console.log( "whooo", data);
})
.catch((data) => {
          console.log( data );
});