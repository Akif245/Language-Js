class railwayform{
submit(){
          alert(this.name  + " your form is submitted for train No."  +  this.number)
}
cancel(){
        alert( this.name +  " your form is cancelled for train No." + this.number)
}
fill(x,y){
          this.name = x
          this.number = y

}
}

let akifform = new railwayform()
akifform.fill("akif",44570)
let abdulform = new railwayform()
 abdulform.fill("abdul",9211)

akifform.submit()
abdulform.cancel()
abdulform.submit()
akifform.cancel()

