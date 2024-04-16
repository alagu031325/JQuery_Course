// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //To programmatically style the p tag with jquery we provide both the property name and its value
  $("p").css("border", "3px red dotted");
  // p tag styles overriden by the specificity
  $("#headerTop").css("border", "1px black solid");
  $(".greenBorder").css("border", "2px green dashed");

  //Filters - to target specific area within the document - similar to done with css (we can use first,last,even or odd) - para number starts with 0 so chooses 1 and 3rd para
  $("#container p:odd").css("border", "3px blue dotted");
});
