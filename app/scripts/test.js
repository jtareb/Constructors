

var Human = function(options){
    
    var options = options || {};

      this.pet = function(dog){
                  dog.status="happy";
                   };

      this.feed = function(dog){
                  dog.hungry=false;
                  };

                  
      };
      
var Dog = function(options){

  var options = options || {};

    
    this.color = 'black' || options.color;    
    this.hungry = true || options.hungry;

};




ar sadie = new Dog({
  color: "black",
  hungry: false
});
xs
var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();

var mason = new Human();

var julia = new Human({
  cool: true
});




