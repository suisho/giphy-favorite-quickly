'use strict';

console.log('\'Allo \'Allo! Content script');

var listItem = $(".hoverable li")

var initialItem = function($item){
  var $gif = $item.find("a.gif")
  var data = $gif.data("id")
  var item = $("<a>") //TODO
  item.on('click', function(){
    $.post("/favorites/" + data, function(){
      // TODO
    })
  })
}
