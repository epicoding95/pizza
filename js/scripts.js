//back end
function Pizza (size,toppings1,toppings2,toppings3){
this.delivery = delivery
this.size = size;
this.toppings1 = toppings1;
this.toppings2 = toppings2;
this.toppings3 = toppings3;
}

Pizza.prototype.total = function(){
  var total =  + this.size + this.toppings1 + this.toppings2 + this.toppings3;
  return total;
}

Pizza.prototype.total2 =function(){
  var total2 =  "Your total is: $" + parseInt(this.size + this.toppings1 + this.toppings2 + this.toppings3);
  return total2;
}
//front end

$(document).ready(function(){
  $("form#YourOrder").submit(function(){
    event.preventDefault();

    
    var size = parseInt($("select#YourSize").val());
    var toppings1 = parseInt($("select#toppings1").val());
    var toppings2 = parseInt($("select#toppings2").val());
    var toppings3 = parseInt($("select#toppings3").val());


var userPizza = new Pizza (size, toppings1, toppings2, toppings3, total);
var userpizza2 = new Pizza (size, toppings1, toppings2, toppings3, total);
  var total =  userPizza.total();
  var total2 = userPizza.total2();


$("#output").text(total2);


  });
});
