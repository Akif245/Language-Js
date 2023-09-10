class Animal{
constructor(name, colour){
this.name = name
this.colour = colour
}
run(){
          console.log(this.name  +  " is running " );
}

shout(){
console.log(this.name  +  " is shouting ");

}
}
class monkey extends Animal{
eatbanana(){
          console.log(this.name   +  " is eating banana ");
}
}
let a=new Animal("monu","black")
let b=new Animal("hlo","white")
let c=new monkey("hello","pink" )
a.shout()
b.run()
c.eatbanana()
