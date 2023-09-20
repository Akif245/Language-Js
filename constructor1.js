function Household(name,experience,work) {
          this.experience=experience
          this.name=name
          this.work=work
          
}
var  Household1 = new Household("akif",9,["lobby"])
console.log(Household1.work);