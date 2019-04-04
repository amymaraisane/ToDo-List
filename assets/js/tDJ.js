//add todo when user clicks enter key
$('input[type="text"]').keypress(function(event){
    if (event.which === 13){
        var userInput = $(this).val();
        $('ul').append('<li><span class="red"><i class="far fa-trash-alt"></i></span>' + userInput + '</li>');
        //takes html string as input
        $(this).val('');
    }
})

//open/close addtodo input box
$('#plusSign').click( function(){
    $('#addToDo').fadeToggle();
});

//check off as completed
$('ul').on('click', 'li', function (){
    //updated to on using an element that is always present from page load, aka static ancsestor. 
    //use middle variable to designate what gets clicked on specifically to trigger the function, aka dynamicChild
    //name for an event handler used on an element to be added later is a delegated event 
   $(this).toggleClass('completed');
});

//show trash can on hover
$('ul').on('mouseenter', 'li', function(){
    $(this).find('.red').animate({fontSize: '20px', width: '34px', paddingLeft: '7px', textAlign: 'center', verticalAlign: 'middle'}, 350);
});
$('ul').on('mouseleave', 'li', function(){
    $(this).find('.red').animate({fontSize: '0', width: '0', paddingLeft: '0', textAlign: 'center', verticalAlign: 'middle'}, 350);
});

//delete todo
$('ul').on('click', '.red', function (event){
    $(this).closest('li').fadeOut(750,function(){
        $(this).remove();
    });
    //could also use  .parent().parent()  lol
    //important note- this is now acting on the li 
    event.stopPropagation();
    //stops the bubbling so does not execute any parent commands/events
 });

//background image changer
 var counter = 0;
 $('body').addClass('mountain');
 $('#backgroundChanger').click(function(){
    if(counter === 0){    
        $("body").attr('class', 'car');
        //this is a very useful method which removes all previous classes and adds a new one in
        counter++;
    }
    else if(counter === 1){   
        $("body").attr('class', 'space');
        counter++;
    }
    else if(counter === 2){
        $("body").attr('class', 'waterfall');
        counter++;
    }
    else if(counter === 3){
        $("body").attr('class', 'mountain');
        counter = 0;
    }
});