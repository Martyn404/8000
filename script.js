    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];
    
    var error = document.getElementById('alert');  


    
    function validated(){
        if (email.value == "martyn@gmail.com" & password.value == "1029") {
            error.style.display = "none";
            return true;
        }
        else{
            error.style.display = "block";
            return false;
        }
    }
    
    
