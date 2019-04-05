//add todo when user clicks enter key
$('input[type="text"]').keypress(function(event){
    if (event.which === 13){
        var userInput = $(this).val();
        var capInput = capFirst(userInput);
        $('ul').append('<li><span class="red"><i class="far fa-trash-alt"></i></span>' + capInput + '</li>');
        //takes html string as input
        $(this).val('');
    } 5e5
})

//capitalize first letter of user input
function capFirst(e){
    var cap1 = e.charAt(0).toUpperCase();
    var capString = cap1 + e.slice(1);
    return capString;
};

//open/close addtodo input box
$('#plusSign').on('click touchstart', function(){
    $('#addToDo').fadeToggle();
});

//check off as completed
$('ul').on('click', 'li', function (){
    //updated to on using an element that is always present from page load, aka static ancsestor. 
    //use middle variable to designate what gets clicked on specifically to trigger the function, aka dynamicChild
    //fyi- name for an event handler used on an element to be added later is a delegated event 
   $(this).toggleClass('completed');
});

//delete todo
$('ul').on('click', '.red', function (event){
    $(this).closest('li').fadeOut(750,function(){
        $(this).remove();
    });
    //could also use  .parent().parent()
    //important note- this is now acting on the li 
    event.stopPropagation();
    //stops the bubbling so does not execute any parent commands/events
 });

//background image changer
 var counter = 0;
 $('body').addClass('mountain');
 $('#backgroundChanger').on('click touchstart', function(){
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
