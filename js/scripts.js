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
});