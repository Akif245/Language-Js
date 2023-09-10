class employe{
login(){
console.log("employe has logged in");
}
logout(){
console.log("employe has logged out");
}
requestleaves(){
          console.log("employ has requested leaves");
}


}
class programer extends employe{

requestcoffee(){
          console.log("employe has requested coffee");
}
}
let a = new programer;
a.requestcoffee()
a.login()
a.requestleaves()