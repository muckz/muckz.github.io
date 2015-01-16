$(document).ready(function() {
    $('#fullpage').fullpage();

    $('.scrolllink').click(function(){
		$.fn.fullpage.moveSectionDown();
    });
    $('.toplink').click(function(){
		$.fn.fullpage.moveTo(1);
    });
});