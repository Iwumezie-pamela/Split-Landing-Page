const container = $('.container');
const left = $('.left');
const right = $('.right');

left.mouseover(function(){
    container.addClass('hover-left');
});

left.mouseleave(function(){
    container.removeClass('hover-left');
});

right.mouseover(function(){
 container.addClass('hover-right')
});

right.mouseleave(function(){
    container.removeClass('hover-right');
});