// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //replacing Text
  $("#create_text").click(function () {
    $("#container p:last").text(
      "Replaced the lorem text and created this using jQuery"
    );
  });

  /* $("#create_copy").click(function () {
    var newText = $("#container p:first").text();
    $("#container p:nth-child(2)").text(newText);
  }); */

  //Replacing content
  $("#create_copy").click(function () {
    var newText = $("#container p:first").html();
    $("#container p:nth-child(2)").html(newText);
  });

  //Inserting content
  $("#append_text").click(function () {
    $("p:first").append("Hurray, I just appended some text here!!");
  });

  $("#prepend_text").click(function () {
    $("p:first").prepend("Hi, I just prepended some text here!!");
  });

  //Modifying content - wrap the container inside div with colorBox class to change the font to purple color
  // $("#container p").wrap('<div class="colorBox">');

  //to wrap only the first para
  $("#container p:first").wrap('<div class="colorBox">');

  //to remove the second p tag alone we empty its content
  //$("#container p:nth-child(2").empty();

  //To replace all of the text within a container
  $("#replace_all").click(function () {
    $(
      "<div class='marginTop'>I fully replaced the existing content</div>"
    ).replaceAll("#container");
  });

  //we can also perform the above functionality with replaceWith function
  /* $("#replace_all").click(function () {
    $("#container").replaceWith("<div class='marginTop'>I am replaced</div>");
  }); */
});
