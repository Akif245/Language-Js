class animal{
constructor(name){
          this._name= name
}
walk (){
          console.log("animal is walking");
}
get name(){
          return this._name
}
set name(newname){
           this._name=newname
}
}
let a=new animal("jack")
a.walk()
console.log(a.name);
a.name="bruno"
console.log(a.name);
console.log(a instanceof animal );