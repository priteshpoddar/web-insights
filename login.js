$(document).ready(function() {
    $("#wiUsername").hide();
    $(".btn-group > .btn").click(function(){
        $(".btn-group > .btn").removeClass("active");
        $(this).addClass("active");
    });
    $("#wi-login").click(function(){
        $("#wiUsername").hide();
    });
    $("#wi-signup").click(function(){
        $("#wiUsername").show();
    });

})