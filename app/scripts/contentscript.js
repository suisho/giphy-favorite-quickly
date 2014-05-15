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
  $item.addClass("extended")
  var isMouseOver = true;
  var $fav = createFavoriteLink()

  $item.on("mouseover", function(){
    $(".extend-favorite:visible").hide()
    $fav.show()
    isMouseOver = true;
  })
  $item.on("mouseout", function(){
    isMouseOver = false;
  })

  $.get("/favorites/" + data, function(d){
    syncIcon($fav, d.result.has_favorited)


    $fav.on('click', function(ev){
      syncIcon($fav)

      $.post("/favorites/" + data, function(d){
        syncIcon($fav, d.result.has_favorited)
      })
      ev.stopPropagation()
      return false
    })
    $gif.append($fav)
    if(!isMouseOver){
      $fav.hide()
    }
  })
}

var syncIcon = function($fav, has_favorited){
  var $icon = $fav.find(".extend-favorite-icon")
  $icon.toggleClass("selected", has_favorited)
}

// create a.class div.facorite-icon
var createFavoriteLink = function(){
  var $fav = $("<a>").addClass("extend-favorite")
  var $div = $("<div>").addClass("extend-favorite-icon")
  $fav.append($div)
  return $fav
}

// endpoint
execute();
