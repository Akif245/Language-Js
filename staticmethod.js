class animal{
constructor(name){
          this.name=animal.capitalize (name)
}
Walk(){
         console.log("animal "  +  this.name + " is walking" );
}
 static capitalize(name){
          return name.charAt(0).toUpperCase() + name.substr(1,name.length)
}
          
          //    ****   another option instead of charAt we can use name.[] ****


static capitalize(name){
          return name[0].toUpperCase() + name.substr(1,name.length)
}

}
a = new animal ("jack") 
a.Walk()
 