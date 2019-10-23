$(document).ready(function () {

  var navbar = $("header");
  var stick = navbar.offset().top;

  $(window).scroll((function () {
    if (window.pageYOffset >= stick) {
      if ($(window).width() <= 600) {
        $("article").css("margin-top", "270px");
      } else {
        $("article").css("margin-top", "80px");
      }
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
      $("article").css("margin-top", "3%")
    }
  }))

  if ($(window).width() <= 600) {
    $("hr").css("width", + $(window).width() + "px");
  }

  $(window).resize(function () {
    if ($(window).width() <= 600) {
      $("hr").css("width", + $(window).width() + "px");
    }
  })

  if (document.location.pathname.indexOf("/index.html") >= 0) {
    $("header").css("margin-bottom", "0px")
  }

  if (document.location.pathname.indexOf("/about.html") >= 0) {
    $("#about-pencil").removeClass("hidden");
  }

  else if (document.location.pathname.indexOf("/APUSH.html") >= 0 ||
    document.location.pathname.indexOf("/APWorld.html") >= 0) {
    $("#resources-pencil").removeClass("hidden");
  }

  else if (document.location.pathname.indexOf("/forum.html") >= 0) {
    $("#forum-pencil").removeClass("hidden");
  }

  else if (document.location.pathname.indexOf("/contact.html") >= 0) {
    $("#contact-pencil").removeClass("hidden");
  }

  var originalWindowWidth = $(window).width();
  var originalCloudHeight = $("#resources").offset().top - 120;

  $("#resourcesNavItem").hover(function () {
    if ($(".cloud-drop").hasClass("hidden")) {
      $(".cloud-drop").removeClass("hidden");
    } else {
      $(".cloud-drop").addClass("hidden");
    }
  })

  $("#resourcesNavItem").mouseover(function () {
    var resources = $("#resources");

    var scrollDist = $(window).scrollTop();
    if (originalCloudHeight > scrollDist) {
      var yPosResources = resources.offset().top - 120;
    } else {
      var yPosResources = resources.offset().top + 23;
    }
    var xPosResources = resources.offset().left - 60;
    $(".cloud-drop").offset({ top: yPosResources, left: xPosResources });

    if ($(window).width() < originalWindowWidth) {
      xOffset = originalWindowWidth - $(window).width();
    } else if ($(window).width() > originalWindowWidth) {
      xOffset = $(window).width() - originalWindowWidth;
    }
    $(".cloud-drop").offset({ left: xPosResources });

  })


});