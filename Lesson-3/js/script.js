// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$("document").ready(function () {
  //Animation
  $("#grow").click(function () {
    //need to grow to 500px width - specifying the style similar to CSS animate so close the curly bracket and then specify the duration and speed
    $("#textBox").animate(
      {
        width: "500px",
      },
      2000
    );
  });

  $("#move").click(function () {
    //need to grow to 500px width - specifying the style similar to CSS animate so close the curly bracket and then specify the duration and speed
    $("#textBox").animate(
      {
        //similar to css properties but instead of '-' using camelCase notation to perform animation
        marginLeft: "200px",
      },
      1000
    );
  });

  $("#bigger").click(function () {
    //need to grow to 500px width - specifying the style similar to CSS animate so close the curly bracket and then specify the duration and speed
    $("#textBox").animate(
      {
        fontSize: "20px",
      },
      3000
    );
  });

  $("#many").click(function () {
    //need to grow to 500px width - specifying the style similar to CSS animate so close the curly bracket and then specify the duration and speed
    $("#textBox").animate(
      {
        fontWeight: "600",
        marginTop: "35px",
        width: "600",
      },
      3000
    );
  });
});
