$(document).ready(function () {
  $('#contact-form').on('submit', function () {
    var isValid = true;
    if ($('#user-name').prop('validity').valid) {
      $('#name_invalid').addClass("hidden");
    }
    else {
      $('#name_invalid').removeClass("hidden");
      isValid = false;
    }

    if ($('#user-email').prop('validity').valid) {
      $('#email_invalid').addClass("hidden");
    }
    else {
      $('#email_invalid').removeClass("hidden");
      isValid = false;
    }

    return isValid;

  });

  $("#resourcesNavItem").click(function () {
    if ($("#resourcesDropdown").hasClass("hidden")) {
      $("#resourcesDropdown").removeClass("hidden");
      $("header").css("padding-bottom", "50px");
    } else {
      $("#resourcesDropdown").addClass("hidden");
      $("header").css("padding-bottom", "0px");
    }
  });
});
