function show () {
          var a = "local variable of outer function"
          console.log(a);
function innerfcn() {
          var b = "local variable of inner function "
          console.log(b);
          console.log(a);                  // {this is from outer fun but due to closure
                                          //  we can use in inner function}
}
innerfcn()
} 
show()                    //{ ***  NOTE:outer function cannot use inner function *** 
                                  // BUT it possible for inner function}
