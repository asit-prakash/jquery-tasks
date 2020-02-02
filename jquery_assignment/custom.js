$(document).ready(function()
    {
        $(".section1:last").click(function()
        {
            $(".section1 .height").css({"height": "300px"});
        });
        $(".section2 button").click(function()
        {
            $(".section2 .height").animate({ marginLeft: 400 }, 'slow');
        });
        $(window).scroll(function()
        {
            if ($(window).scrollTop() >= 700 && $(window).scrollTop() <= 900) 
            {
                $(".full").css({"position": "fixed","top": "0","width": "100%"});
            }  
            else
            {
                $(".full").css({"position": "static"});
            }
        });
        $(".section5 button").click(function()
        {
            $("p:nth-child(3)").wrap("<div class='wrapped'></div>");
        });
        $(".section9 button").click(function()
        {
            $("#test3").val("it worked");
            $("#test3").attr('disabled','disabled');
        });
        $(".section6 button").click(function()
        {
            $("p").not(".intro").css({"background-color":"blue"});
        });
        $(".section7 button").click(function()
        {
            $(".section7 li:lt(6):gt(2)").css({"background-color":"red"});
        });
        $(".section8 button").click(function()
        {
            $(".section8 li:gt(0)").css({"border-color":"red"});
        });
        $(".tabcontent :eq(0)").click(function()
        {
            $(".content").css({"display":"none"});
            $(".active").css({"display":"block"});
        });
        $(".tabcontent :eq(1)").click(function()
        {
            $(".content").css({"display":"block"});
            $(".active").css({"display":"none"});
        });
        $('.section10 button').click(function()
        { 
            $("html").animate({ scrollTop: 0 }, 1500);  
        }); 
    });
