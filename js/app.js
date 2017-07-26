$(document).ready(function() {
    //$('#hello-sec').addClass('fadeInDown animated');
	$('#fullpage').fullpage({
		anchors: ['hello','intro', 'skills', 'works', 'about', 'contact'],
		sectionsColor: ['#fff', '#fefefe', '#fff', '#fefefe', '#fff', '#fefefe'],
		menu: '#menu',
		css3: true,
		autoScrolling: false,
		scrollOverflow: false,
		responsiveWidth:576,
		scrollingSpeed:500,
		slidesNavigation: true,
		loopHorizontal: false,
    sectionSelector: 'section',
    verticalCentered: true,
    paddingTop: '56px',

		onLeave: function(index, nextIndex, direction) {
		    if(index == 1){
			    $('#hello-sec').removeClass('fadeInDown animated');
		    }

		    else if(index == 2 && direction == 'down'){
			    //alert("Going to section 1!");
		    }

		    if(nextIndex == 1 && index != 2){
			    $('#hello-sec').addClass('fadeInDown animated');
		    }
		}
	});
});
$(document).on('click','.navbar-collapse',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});
