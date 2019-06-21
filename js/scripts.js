//back end
function Pizza (size,toppings1,topping2, toppings3){
this.size = size
this.toppings1 = toppings1
this.toppings2 = toppings2
this.toppings3 = toppings3

this.total =function(){
   var total = this.size + this.toppings1 + this.toppings2 + this.toppings3;
  return total;
}


};



//front end

$(document).ready(function(){
  $("#YourOrder").submit(function(event){


// debugger;
var size = parseInt($("input#Yoursize").val());
var toppings1 = parseInt($("input#toppings1").val());
var toppings2 = parseInt($("input#toppings2").val());
var toppings3 = parseInt($("input#toppings3").val());
var total = parseInt($("input#Yoursize").val()); + parseInt($("input#toppings1").val()); + parseInt($("input#toppings2").val()); + parseInt($("input#toppings3").val());


$("#output").text(total);
event.preventDefault();


  });
});




// var pizza2 = new pizza();
// pizza.total()
// var pizza3 = new pizza();
// pizza.total()
// var pizza4 = new pizza();
// pizza.total()
// pizza.prototype.total = function(total)
