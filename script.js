$(document).ready(function(){   
    //for mob menu click //
    $(".mob-menu").click(function() {
        $(".mob-menu span").toggleClass("active");
        if($(".mob-menu span").hasClass("active")){
            $(".mob-item").slideDown().css("display","flex");   
        }else{
            $(".mob-item").slideUp().css("display","flex");      
        }
    });
    
});
