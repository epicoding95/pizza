//back end
function Pizza (size,toppings1,toppings2,toppings3){
this.size = size;
this.toppings1 = toppings1;
this.toppings2 = toppings2;
this.toppings3 = toppings3;
}

Pizza.prototype.total = function(){
  var total = this.size + this.toppings1 + this.toppings2 + this.toppings3;
  return total;
}


//front end

$(document).ready(function(){
  $("form#YourOrder").submit(function(){
    event.preventDefault();
    var size = parseInt($("select#YourSize").val());
    console.log(size);
    var toppings1 = parseInt($("select#toppings1").val());
    console.log(toppings1);
    var toppings2 = parseInt($("select#toppings2").val());
    var toppings3 = parseInt($("select#toppings3").val());


var userPizza = new Pizza (size, toppings1, toppings2, toppings3, total);
  var total = userPizza.total();
console.log(userPizza.total);

// debugger;



$("#output").append(total);


  });
});




// var pizza2 = new pizza();
// pizza.total()
// var pizza3 = new pizza();
// pizza.total()
// var pizza4 = new pizza();
// pizza.total()
// pizza.prototype.total = function(total)
