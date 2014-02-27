// Cache selectors
$(document).ready(function(){
  var topMenu = $("#header #menu");

  if($("body").hasClass("fixed")){
    var topMenuHeight = topMenu.outerHeight() 
  } else {
    var topMenuHeight = topMenu.outerHeight()
  }

  var lastId,
  menuItems = topMenu.find(".smooth-link"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }

  });

  // Bind click handler to menu items so we can get a fancy scroll animation
  $('a.smooth-link').click(function(){
    if($("body").hasClass("fixed")){
      // Tablet and smartphone
      if($(window).width() < 991){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
      } else{
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topMenuHeight
        }, 500);
      }
    } else {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - topMenuHeight
      }, 500);
    }
      return false;
  });

  $('#menubrand').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
      return false;
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight*2

    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
      fromTop = $(document).height()
    }
    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top <= fromTop)
      return this;
  });
    
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#"+id+"]").parent().addClass("active");
    } else{

    }

  });
});