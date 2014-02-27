// Cache selectors
$(document).ready(function(){
  var lastId,
  topMenu = $("#header"),
  topMenuHeight = topMenu.outerHeight() + 80,
  // All list items
  menuItems = topMenu.find(".smooth-link"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  // Bind click handler to menu items so we can get a fancy scroll animation
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 80
      }, 500);
      return false;
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
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
    } 
                      
  });
});