// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //p tag must be direct descendant of div tag
  $("div > p").css("backgroundColor", "yellow");

  //to select p with specific class
  $("div > p.fourth-para").css("border", "2px solid black");

  //selects the first ul element after the div element with id as box - ul being first sibling of div
  $("div#box + ul").css("border", "2px dashed red");

  //filters - to select only the first child
  $("p:first-child").css("border", "2px dotted green");
  //selects all last p of each type
  $("p:last-of-type").css("backgroundColor", "grey");

  //to select p tag that contains a particular word
  $('p:contains("Lorem")').css("backgroundColor", "orange");

  //each p tag is a parent of its own so will select all p (p:parent)

  //selects all p tag that is 3rd child of the parent
  $("p:nth-child(3)").css("backgroundColor", "#c3c3c3");
});
