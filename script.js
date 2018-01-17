//Final Project - CSS Class
//Coded by Thang cong Dinh

$(function(){
    
    function isValidEmail(email) { // email validate function
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    };
    
    function isValidPhone(phone){
        var pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
        return pattern.test(phone); 
    }
    
    $(".form").hover(function(){
       //hover in   
        if(!$(this).hasClass("animation-completed")){
            $(".tool-tip").show().animate({
            "width": "100px",
            "height": "35px"
            },500);
        }
        
    }, function(){
       //hover out  
        if(!$(this).hasClass("animation-completed")){
            $(".tool-tip").animate({
            "width": "0",
            "height": "0"
            },500).hide();
        }
        
    });
    
    $(".form").on("click", function() {
        $(this).addClass("active").addClass("animation-completed");
        $(".tool-tip").animate({
            "width": "0",
            "height": "0"
            },500).hide();
    });

    $("#btn_submit").on("click", function() {
        //validate form
        var name = $("#txt_name").val();
        var email = $("#txt_email").val();
        var phone = $("#txt_phone").val();
        var msg = $("#txt_msg").val();
        var delayTime = 600;
        
        if(name === null || name.length <= 0){
            $(".err-msg").text("Please enter your name!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_name").focus();
            return false;
        }else if(email === null || email.length <= 0){
            $(".err-msg").text("Please enter your email!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_email").focus();
            return false;
        }else if(!isValidEmail(email)){
            $(".err-msg").text("Please enter a proper email!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_email").focus();
            return false;
        }else if(phone === null || phone.length <= 0){
            $(".err-msg").text("Please enter your phone number!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_phone").focus();
            return false;
        }else if(!isValidPhone(phone)){
            $(".err-msg").text("Please enter your proper phone number!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_phone").focus();
            return false;
        }else if(msg === null || msg.length <= 0){
            $(".err-msg").text("Please enter your message to us!").fadeIn(500).delay(delayTime).fadeOut(500);
            $("#txt_msg").focus();
            return false;
        }else{         
            $(this).parent().parent().hide(300);
            $(".confirm_msg").addClass("active");
            
            //clear all fields
            $("#txt_name").val("");
            $("#txt_email").val("");
            $("#txt_phone").val("");
            $("#txt_msg").val("");

        }
        return false;
    });

    $(".confirm_msg").on("click", function() {
      $(this).removeClass("active");
      $(".form").removeClass("active").removeClass("animation-completed").show(1000);
    });


});