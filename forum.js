$(document).ready(function(){


  $('#user-form').on('submit', function() {
  	var isValid=true;
    console.log("submit!");
  	if ($('#first_name').prop('validity').valid){
      $('.first_name_error').addClass("hidden");
    }
  	else{
      $('.first_name_error').removeClass("hidden");
      isValid=false;

    }


    if ($('#mail').prop('validity').valid){
      $('.email_error').addClass("hidden");
    }
    else{
      $('.email_error').removeClass("hidden");
      isValid=false;
    }

    if ($('#school').prop('validity').valid){
      $('.school_error').addClass("hidden");
    }
    else{
      $('.school_error').removeClass("hidden");
      isValid=false;
    }


    if ($('#message').prop('validity').valid){
      $('.message-error').addClass("hidden");
    }
    else{
      $('.message-error').removeClass("hidden");
      isValid=false;
    }

    console.log(isValid);
  return isValid;
  });


});
