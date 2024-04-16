// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //Add Class
  $("#add-class").click(function () {
    //add css class using jQuery addClass function
    $("p:first").addClass("color");
  });

  //Remove Class
  $("#remove-class").click(function () {
    //add css class using jQuery addClass function
    $("p:first").removeClass("color");
  });

  //Toggle Class
  $("#toggle-class").click(function () {
    //add css class using jQuery addClass function
    $("p:first").toggleClass("color");
  });

  //Increase Class
  $("#increase-class").click(function () {
    //add 1px to the font-size everytime this button is clicked
    //If font-size doesnt exist adds this as an inline style
    $("p:first").css("font-size", "+=1px");
  });

  //Decrease Class
  $("#decrease-class").click(function () {
    //add 1px to the font-size everytime this button is clicked
    $("p:first").css("font-size", "-=1px");
  });
});
