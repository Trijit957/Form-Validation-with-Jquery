$(document).ready(function() {

	$('#submit').click(function(event) {
        
       event.preventDefault();
        
       formValidation();

    });

    fastFeedBackForm();

	function formValidation() {

	    var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        var city = $('#city').val().trim();

        nameValidation(name);
        emailValidation(email);
        passwordValidation(password);
        cityValidation(city);

        

        if(nameValidation(name) && emailValidation(email) && passwordValidation(password) && cityValidation(city)){
        	$('#name').val("");
            $('#email').val("");
            $('#password').val("");
            $('#city').val("");
        	$('#success').html("Data Inserted!!!").fadeIn(2000).delay().fadeOut(2000);
        }

	}    

	function nameValidation(name) {
		
		if(!isValidName(name))
        {
           $('#err_name').html("*Required");
           $('#name').css("border", "2px solid red");
        }else{
           $('#err_name').html("");
           $('#name').css("border", "2px solid green");
           return true;
        }
	}


	function emailValidation(email) {
		
		if(!isValidEmail(email))
        {
           $('#err_email').html("*Invalid Email");
           $('#email').css("border", "2px solid red");	
        }
        else{
        	$('#err_email').html("");
        	$('#email').css("border", "2px solid green");
        	return true;
        }

	}


	function passwordValidation(password) {
		
		if(!isValidPassword(password))
        {
           $('#err_password').html("*Password should contain atleast 8 characters, 1 number, 1 uppercase letter and 1 special character.");
           $('#password').css("border", "2px solid red");	
        }
        else{
        	$('#err_password').html("");
        	$('#password').css("border", "2px solid green");
        	return true;
        }

	}


	function cityValidation(city) {
		if(!isValidCity(city))
        {
           $('#err_city').html("*Required");
           $('#city').css("border", "2px solid red");	
        }else{
        	$('#err_city').html("");
        	$('#city').css("border", "2px solid green");
        	return true;
        }
	}

    function isValidName(name) {
        if(name == "")
        	return false;
        else
        	return true;
    }

    function isValidEmail(email) {

    	var email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(email == "")
        	return false;
        else if(!email_pattern.test(email))
        	return false;
        else
        	return true;
    }

    function isValidPassword(password) {
    	var pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(password == "")
        	return false;
        else if(!pass_pattern.test(password))
        	return false;
        else
        	return true;
    }

    function isValidCity(city) {
    	if(city == "")
        	return false;
        else
        	return true;
    }


	function fastFeedBackForm() {
		var nameInput = $('#name');
        var emailInput = $('#email');
        var passwordInput = $('#password');
        var cityInput = $('#city');

        nameInput.blur(function() {
            if(!isValidName($('#name').val().trim()))
            {
            	$('#name').css("border", "2px solid red");
            	$('#err_name').html("*Required");
            }
            else{
            	$('#name').css("border", "2px solid green");
            	$('#err_name').html("");
            }
        });

        emailInput.blur(function() {
            if(!isValidEmail($('#email').val().trim()))
            {
            	$('#email').css("border", "2px solid red");
            	$('#err_email').html("*Invalid Email");
            }
            else{
            	$('#email').css("border", "2px solid green");
            	$('#err_email').html("");
            }
        });

        passwordInput.blur(function() {
            if(!isValidPassword($('#password').val().trim()))
            {
            	$('#password').css("border", "2px solid red");
            	$('#err_password').html("*Password should contain atleast 8 characters, 1 number, 1 uppercase letter and 1 special character.");
            }
            else{
            	$('#password').css("border", "2px solid green");
            	$('#err_password').html("");
            }

        });

        cityInput.blur(function() {
            if(!isValidCity($('#city').val().trim()))
            {
            	$('#city').css("border", "2px solid red");
            	$('#err_city').html("*Required");
            }
            else{
            	$('#city').css("border", "2px solid green");
            	$('#err_city').html("");
            }
        });

	}



});

// html css(bootstrap) javascript(jQuery)

// front-end:
  
//  React.js (library) / Firebase(15)
//  Vue.js (Framework)
//  Angular.js (Framework)

// back-end:
//   php (core php)

//   MVC architecture(Model/View/Controller)
//   php-Laravel (Framework)
//   Node.js
//   {Django(python-Framework)}

