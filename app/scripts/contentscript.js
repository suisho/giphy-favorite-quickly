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

  $.get("/favorites/" + data, function(d){
    var $fav = createFavoriteLink()


    syncIcon($fav, d.result)

    $item.on("mouseover", function(){
      $fav.show()
    })
    $item.on("mouseout mouseleave", function(){
      $fav.hide()
    })

    $fav.on('click', function(ev){
      $.post("/favorites/" + data, function(d){
        syncIcon($fav, d.result)
      })
      ev.stopPropagation()
      return false
    })
    $gif.append($fav)

  })
}

var syncIcon = function($fav, result){
  $fav.find(".extend-favorite-icon").toggleClass("selected", result.has_favorited)
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
