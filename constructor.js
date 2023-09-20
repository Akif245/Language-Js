class railwayform{
          constructor(x,y){
                    console.log("constructor called..." + x + y);
          this.name = x
          this.number= y
                    }
          submit(){
                    alert(this.name  + " your form is submitted for train No."  +  this.number)
          }
          cancel(){
                  alert( this.name +  " your form is cancelled for train No." + this.number)
    }          
  }         
          let akifform = new railwayform("akif",44570)
          
          let abdulform = new railwayform("abdul",9211)
                    
          akifform.submit()
          abdulform.cancel()
          abdulform.submit()
          akifform.cancel()





          
          