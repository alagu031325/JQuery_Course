// we reference jquery using '$'

//selecting entire document - when it is ready the call back function will be executed
$('document').ready(function(){

    /* body selector
    $('body').append('<h2>I love jQuery</h2>'); */

    /* add styles to h1 element 
    $('h1').css('border','3px solid #000'); */

    //We can use filters to selectors (first/last)
    $('h2:first').css('border','3px solid #000');

    //Selecting with .class/#id 
    let replaceText = $('<p>');

    replaceText.append('<h3>I just replaced some text within div</h3>');

    $('#textBox').html(replaceText);

    //Handling events - interactions with the browser - click, mouseover
    
    function whenMouseIsClicked(){
        //change the html within
        $('#textBox').html('<h2>You Clicked Me 🫣</h2>');
    }

    function whenMouseLeaves(){
        $('#textBox').html('<h2>Where are you going 👋</h2>');
    }

    function whenMouseEnters(){
        $('#textBox').html('<h2>Try Clicking Me 😉</h2>');
    }

    $('#textBox').on('click',whenMouseIsClicked);
    $('#textBox').on('mouseleave',whenMouseLeaves);
    $('#textBox').on('mouseenter',whenMouseEnters);
    
    //Show and hide
    $('#show').on('click',function(){
        //show the contents of the textbox
        $('#hide_textbox').show();
    });

    $('#hide').on('click',function(){
        //hide the contents of the textbox
        $('#hide_textbox').hide();
    })

});