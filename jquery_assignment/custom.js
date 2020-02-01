$(document).ready(function()
    {
        $(".button1").click(function()
        {
            $(".height").css({"height": "300px"});
        });
        $(".button2").click(function()
        {
            $(".height").animate({ marginLeft: 400 }, 'slow');
        });
        $(window).scroll(function()
        {
            if ($(window).scrollTop() >= 700) 
            {
                $(".full").css({"position": "fixed","top": "0","left": "0","width": "100%"});
            }  
            if($(window).scrollTop() >= 900 || $(window).scrollTop() < 700)
            {
                $(".full").css({"position": "static"});
            }
        });
        $(".button4").click(function()
        {
            $(".p2").wrap("<div>");
        });
        $(".button4").click(function()
        {
            $("#test3").val("it worked");
            $("#test3").attr('disabled','disabled');
        });
        $(".button6").click(function()
        {
            $("p").not(".intro").css({"background-color":"blue"});
        });
        $(".button7").click(function()
        {
            $(".section7 li:lt(6):gt(2)").css({"background-color":"red"});
        });
        $(".button8").click(function()
        {
            $(".section8 li:gt(0)").css({"border-color":"red"});
        });
        $(".button-tab1").click(function()
        {
            $(".tab1").html("tab1 value changed").css({"background-color":"blue"});
        });
        $(".button-tab2").click(function()
        {
            $(".tab2").html("tab2 value changed").css({"background-color":"red"});
        });
        $('.scrolltop').click(function()
        { 
            $("html").animate({ scrollTop: 0 }, 1500);  
        }); 


    });
