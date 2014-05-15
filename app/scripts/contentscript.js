'use strict';
var execute = function(){
  $("ul.gifs").on('mouseover', ".hoverable li", function(ev){
    initialItem($(ev.currentTarget))
  })
}

var initialItem = function($item){
  if($item.hasClass("extended")){
    return
  }
  var $gif = $item.find("a.gif")
  var data = $gif.data("id")
  var $item = createFavoriteLink()
  $gif.append($item)
  $item.addClass("extended")
  /*$item.on('click', function(){
    $.post("/favorites/" + data, function(){
    })
  })*/
}
// create a.class div.facorite-icon
var createFavoriteLink = function(){
  var $div = $("<div>").addClass("extend-favorite-icon")
  var $a = $("<a>").addClass("extend-favorite")
  $a.append($div)
  return $a
}

// endpoint
execute();
