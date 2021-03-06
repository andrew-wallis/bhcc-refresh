$(document).ready(function (){
    $(".accordion-expand").click(function(e){
      var accordionWrapper = $(this).parent().parent();
      if (accordionWrapper.hasClass("accordion-active")) {
        return false;
      } else {
        e.preventDefault();
        var accordionActive = $(".accordion-active");
        accordionActive.find(".service-navigation-level-2").slideUp(400);
        accordionWrapper.find(".service-navigation-level-2").slideDown(400);
        accordionActive.removeClass("accordion-active");
        accordionWrapper.addClass("accordion-active");
      }
    })

    $(".dropdown-header a").click(function(e){
      e.preventDefault();
      href = $(this).attr("href");
      var dropDownbody = $(href);
      var dropDownwrapper = $(this).parent();
      if(dropDownwrapper.hasClass("dropdown-active")) {
        dropDownbody.slideUp(400);
        dropDownwrapper.removeClass("dropdown-active");
      } else {
        dropDownbody.slideDown(400);
        dropDownwrapper.addClass("dropdown-active");
      }
    })

    $(".header-navigation-menu-parent").click(function(e){
      e.preventDefault();
      href = $(this).attr("href");
      var menuBody = $(href);
      wrapper = $(this).parent().parent();
      if($(this).hasClass("menu-active")) {
        menuBody.slideUp(500);
        $(this).removeClass("menu-active");
      } else {
        var active = wrapper.find(".menu-active");
        activeHref = active.attr("href");
        console.log(active);
        $(activeHref).slideUp(500);
        active.removeClass("menu-active");
        menuBody.slideDown(500);
        $(this).addClass("menu-active");
      }
    });

});