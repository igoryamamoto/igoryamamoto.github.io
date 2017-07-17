$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['hello','intro', 'skills', 'works', 'about', 'contact'],
		sectionsColor: ['#fff', '#fefefe', '#fff', '#fefefe', '#fff', '#fefefe'],
		menu: '#menu',
		css3: true,
		autoScrolling: false,
		scrollOverflow: true,
		responsiveWidth:576,
		scrollingSpeed:500,
		slidesNavigation: true,
		loopHorizontal: false
	});
});
$(document).on('click','.navbar-collapse',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});
