$(document).ready(function (){


var button = "on";
//Event Handler - Pepperoni Button:
$('.btn-pepperonni').click( function (){
    if (button === "on") {
      $('.pep').hide();
      button = "off";
    } else {
      $('.pep').show();
      button = "on";
    }
}); //Button End



//Event Handler - Mushroom Button:
$('.btn-mushrooms').click(function(){
    if (button === "on") {
      $('.mushroom').hide();
      button = "off";
    } else {
      $('.mushroom').show();
      button = "on";
    }
});//Button End



//Event Handler - Green Peppers Button:
$('.btn-green-peppers').click(function(){
    if (button === "on") {
      $('.green-pepper').hide();
      button = "off";
    } else {
      $('.green-pepper').show();
      button = "on";
  }
});//Button End



//Event Handler - Sauce Button:
$('.btn-sauce').click(function(){



});//Button End



//Event Handler - Crust Button:
$('.btn-crust').click(function(){



});//Button End








});//Doctument Ready
