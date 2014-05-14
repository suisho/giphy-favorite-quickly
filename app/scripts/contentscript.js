'use strict';
document.onreadystatechange = function () {
  var execute = function(){
    var listItem = $(".hoverable li")
    listItem.forEach(function(item){
      initialItem(item)
    })


  }

  var initialItem = function($item){
    var $gif = $item.find("a.gif")
    var data = $gif.data("id")
    var $item = createFavoriteLink()
    $gif.append($item)
    /*$item.on('click', function(){
      $.post("/favorites/" + data, function(){
      })
    })*/
  }
  // create a.class div.facorite-icon
  var createFavoriteLink = function(){
    var $div = $("<div>").addClass("favorite-icon")
    var $a = $("<a>").addClass("favorite")
    $a.append($div)
    return $a
  }
  
  // endpoint
  if (document.readyState == "complete") {
    execute();
  }

}
