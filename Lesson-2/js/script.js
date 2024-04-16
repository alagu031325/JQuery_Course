// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //Hover state - class selector
  $(".textCopy").hover(highlightCopy);

  function highlightCopy() {
    //toggle css class
    $(this).toggleClass("highlight");
  }

  //Fading
  $("#fade-in").on("click", function () {
    //In how many seconds to fade in - 3sec or 3000ms
    $("#fadeText").fadeIn(3000, function () {
      //when fade in is done
      alert("I'm Done Fading In");
    });
  });

  $("#fade-out").on("click", function () {
    //In how many seconds to fade in - predefined time(fast) - function called on completion is optional
    $("#fadeText").fadeOut("fast");
  });

  //Hiding Text up and down
  $("#slide-up").click(function () {
    //2secs to slide up and how to we want to slide
    $("#slideText").slideUp(2000, "linear");
  });

  $("#slide-down").click(function () {
    //2secs to slide up and how to we want to slide
    $("#slideText").slideDown(2000, "linear");
  });

  $("#toggle-slide").click(function () {
    //We just use toggle to open and close texts
    $("#slideText").slideToggle(2000, function () {
      alert("Slide Effect Done");
    });
  });

  $("#toggleMe").click(function () {
    //how fast we want to toggle
    $("#toggleBox").toggle(3000, "swing");
  });
});
