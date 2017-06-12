 $(document).ready(function () {
     /*zmiana kolorów przycisków w nav ---------------------------------- */
     $('section').mouseenter(function () {
         var hightlihgtToAdd = $(this).attr('rel');
         $('.main_nav a').removeClass('highlight');
         $('#' + hightlihgtToAdd).fadeIn(300, function () {
             $(this).addClass('highlight');
         });
         $('section').mouseleave(function () {
             $('.main_nav a').removeClass('highlight');
             $('#section1').addClass('highlight');
         });
         $('nav').mouseenter(function () {
             $('.main_nav a').removeClass('highlight'); 
         });
         $('nav').mouseleave(function(){
             $('#section1').addClass('highlight'); 
         });
         
     });
     /*Przełączenie galerii ---------------------------*/
     $('.galery .tabs li').on('click', function () {
         var $panel = $(this).closest('.galery');
         $panel.find('.tabs li.active').removeClass('active');
         $(this).addClass('active');
         var panelToShow = $(this).attr('rel');
         $panel.find('.panel.active').fadeOut(300, showNextPanel);

         function showNextPanel() {
             $(this).removeClass('active');
             $('#' + panelToShow).fadeIn(300, function () {
                 $(this).addClass('active');
             });
         }
     });
     /*Przełączanie wewnątrz galerii ----------------------------------*/
     $('.panel .next_part').on('click', function () {
         var nextPart = $(this).attr('rel');
         $('.panel.active').fadeOut(300, showNextPart);

         function showNextPart() {
             $(this).removeClass('active');
             $('#' + nextPart).fadeIn(300, function () {
                 $(this).addClass('active');
             });
         }
     });
     /*Przewijanie strony----------------------------------------*/
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('#gototop').fadeIn(500);
         }
         else {
             $('#gototop').fadeOut(500);
         }
     });
     $('#gototop, #section1').click(function () {
         $('html, body').animate({
             scrollTop: 0
         }, 1000);
         return false;
     });
     $('.main_nav a, main a').on('click', function () {
         if (this.hash !== "") {
             var hash = this.hash;
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 1000, function () {
                 window.location.hash = hash;
             });
         }
     });
     /*zmiany css     testy----------------------------------*/
     $(window).scroll(function () {
         if ($(window).width() >= 1400) {
             if ($(document).scrollTop() > 850) {
                 $('nav').css("background-color", "rgba(0, 0, 0, 0)");
                 $('nav').css("box-shadow", "0 0 0  rgba(0, 0, 0, 0)");
                 $('.logo').css("font-size", "2em");
                 $('.logo').css("transition", ".7s");
                 $('nav .main_nav a').css("padding", ".5em");
                 $('nav .main_nav a').css("transition", ".7s");
                 $('nav').css("transition", ".7s");
             }
             else {
                 $('nav').css("background-color", "rgba(0, 0, 0, .7)");
                 $('nav').css("box-shadow", "2px 2px 3px rgba(0, 0, 0, .7)");
                 $('.logo').css("font-size", "3em");
                 $('nav .main_nav a').css("padding", "1em");
                 $('nav .main_nav a').css("transition", ".7s");
                 $('.logo').css("transition", ".7s");
                 $('nav').css("transition", ".7s");
             }
         }
         else if ($(window).width() <= 1400) {
             if ($(document).scrollTop() > 500) {
                 $('nav').css("background-color", "rgba(0, 0, 0, 0)");
                 $('nav').css("box-shadow", "0 0 0  rgba(0, 0, 0, 0)");
                 $('nav .main_nav a').css("padding", ".5em");
                 $('nav .main_nav a').css("transition", ".7s");
                 $('nav').css("transition", ".7s");
             }
             else {
                 $('nav').css("background-color", "rgba(0, 0, 0, 1)");
                 $('nav').css("box-shadow", "2px 2px 3px rgba(0, 0, 0, .7)");
                 $('nav .main_nav a').css("padding", "1em");
                 $('nav .main_nav a').css("transition", ".7s");
                 $('nav').css("transition", ".7s");
             }
         }
     });
 });