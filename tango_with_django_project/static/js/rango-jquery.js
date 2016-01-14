$(document).ready( function() {

    $("#about-btn").click( function(event) {
        alert("You clicked the button using JQuery!");
    });

    $("p").hover( function() {
            $(this).css('color', 'red');
    },
    function() {
            $(this).css('color', 'black');
    });

    $("#about-btn").addClass('btn btn-primary')

    $("#about-btn").click( function(event) {
		msgstr = $("#msg").html()
        msgstr = msgstr + "o"
        $("#msg").html(msgstr)
 	});

    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
         $('#cats').html(data);
        });
});
    
});

