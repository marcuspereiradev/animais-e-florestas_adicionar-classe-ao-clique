$(document).ready(function(){
    var classeActive = 'active'

    $('.animais .tab-menu a').first().addClass(classeActive);
    $('.animais .item').first().addClass(classeActive);

    $('.animais .tab-menu a').click(function(event){
       event.preventDefault();
       var itemId = $(this).attr('href');
       $('.animais .tab-menu a, .animais .item').removeClass(classeActive);
       $(this).addClass(classeActive);
       $(itemId).addClass(classeActive);
    });

    $('.florestas .tab-menu a').first().addClass(classeActive);
    $('.florestas .item').first().addClass(classeActive);

    $('.florestas .tab-menu a').click(function(event){
       event.preventDefault();
       var itemId = $(this).attr('href');
       $('.florestas .tab-menu a, .florestas .item').removeClass(classeActive);
       $(this).addClass(classeActive);
       $(itemId).addClass(classeActive);
    });
});