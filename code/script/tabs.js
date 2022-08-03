











// (function($){				
//     jQuery.fn.lightTabs = function(options){
        
//         var createTabs = function(){
//             tabs = this;
//             i = 0;
            
//             showPage = function(i){
//                 $(tabs).children(".vishlist").children(".slide").hide();
//                 $(tabs).children(".vishlist").children(".slide").eq(i).show("5000");
//                 $(tabs).children(".slider").children(".slider__scroll").removeClass("active");
//                 $(tabs).children(".slider").children(".slider__scroll").eq(i).addClass("active");
//             }
            
//             showPage(0);				
            
//             $(tabs).children(".slider").children(".slider__scroll").each(function(index, element){
//                 $(element).attr("data-page", i);
//                 i++;                        
//             });
            
//             $(tabs).children(".slider").children(".slider__scroll").click(function(){
//                 showPage(parseInt($(this).attr("data-page")));
//             });				
//         };		
//         return this.each(createTabs);
//     };	
// })(jQuery);
// $(document).ready(function(){
//     $(".server").lightTabs();
// });








//<Кнопка смена языка=============================================
$(document).ready(function() {

    $('.rus').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(rus[key]);
       });
    });
 
 
    $('.eng').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(eng[key]);
       });
    });
 
    var rus = {
        ux: 'UX | UI Дизайнер 24 года, Минск'
    };
    var eng = {
        ux: 'UX | UI designer 24 years old, Minsk'
    };
 
    var rus = {
       test: 'тест',
       name: 'UX | UI Дизайнер 24 года, Минск'
    };
    var eng = {
       test: 'test',
       name: 'UX | UI designer 24 years old, Minsk'
    };
 
 
 
 
 
 });


 //=====================================================================