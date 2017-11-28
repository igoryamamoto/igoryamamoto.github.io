// Timeline functions
function hideBlocks(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
  });
}
function showBlocks(blocks, offset) {
  blocks.each(function(){
    ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
  });
}
function hello() {
    $(this).removeClass().addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
};
function gogo() {
    $('#name-wrapper').removeClass().addClass('hinge animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#name-wrapper').removeClass();
    });
    window.setTimeout(function() {
      $.fn.fullpage.moveSectionDown();
    }, 1800);
};
function skillSelect(className) {
  $('.skill-group').addClass('text-muted');
  $(className).removeClass('text-muted');
  $('.circles-group').css({transform: 'scale(0.5)', display: 'none'});
  $('.circles-group' + className).css({transform: 'scale(1)', display: 'block'});
  switch (className) {
    case '.backend':
      $('.circles-group.frontend').css({display: 'block'});
      break;
    case '.frontend':
      $('.circles-group.engineering').css({display: 'block'});
      break;
    case '.engineering':
      $('.circles-group.others').css({display: 'block'});
      break;
    case '.others':
      $('.circles-group.lang').css({display: 'block'});
      break;
    case '.lang':
      $('.circles-group.continue').css({display: 'block'});
      break;
    default:
  }
};
function createCircles() {
    var radius, width, winWidth = $(window).width(),
        skills = [
          { id: 'python', colors: ['#f0f0f0', '#407EB0'], value: 90, text: 'Python' },
          { id: 'ruby', colors: ['#f0f0f0', '#EC1622'], value: 50, text: 'Ruby' },
          { id: 'sql', colors: ['#f0f0f0', '#1BAFEC'], value: 65, text: 'SQL' },
          { id: 'html', colors: ['#f0f0f0', '#E54F27'], value: 95, text: 'HTML5' },
          { id: 'css', colors: ['#f0f0f0', '#2177FF'], value: 90, text: 'CSS3' },
          { id: 'js', colors: ['#f0f0f0', '#F0DB4F'], value: 70, text: 'Javascript' },
          { id: 'matlab', colors: ['#f0f0f0', '#FF8911'], value: 75, text: 'MATLAB' },
          { id: 'labview', colors: ['#f0f0f0', '#FFE700'], value: 60, text: 'LabVIEW' },
          { id: 'arduino', colors: ['#f0f0f0', '#0CA1A6'], value: 75, text: 'Arduino' },
          { id: 'git', colors: ['#f0f0f0', '#24292E'], value: 85, text: 'Git' },
          { id: 'latex', colors: ['#f0f0f0', '#008080'], value: 65, text: 'Latex' },
          { id: 'learn', colors: ['#f0f0f0', '#0E579C'], value: 95, text: 'Fast learning' },
          { id: 'pt', colors: ['#f0f0f0', '#239E46'], value: 99.9, text: 'Portuguese' },
          { id: 'en', colors: ['#f0f0f0', '#EC1C24'], value: 75, text: 'English' },
        ];
    if(winWidth < 350) { radius = 40; width = 10; } else
    if(winWidth < 576) { radius = 50; width = 10; } else
    if(winWidth < 768) { radius = 60; width = 15; } else
    if(winWidth < 992) { radius = 80; width = 20; }
    else { radius = 100; width = 20; }
		skills.map(function(s) {
			Circles.create({
				id: s.id,
				value: s.value,
				radius: radius,
				width: width,
				colors: s.colors,
        text: s.text,
        textClass: 'skill-txt',
        styleText: true,
			});
    });
}
$(document).ready(function() {
  var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8,
      secColor = '#f5f5f7',
      currSkillGroup = '.backend';
  skillSelect(currSkillGroup);
  if ($(window).width() <= 768) {
    $('nav').hide();
    $('#logo').css('padding','0px');
  } else {
    $('nav').fadeIn();
  };
  $('#hello-txt').click(hello);
  $('#name').click(gogo);
// Skills
  $('.skill-group').hover(
    function() {
      var className = '.' + $(this).attr('class').split(' ')[0];
      skillSelect(className);
    },
    function() {
      skillSelect(currSkillGroup);
    }
  ).click(
    function() {
      currSkillGroup = '.' + $(this).attr('class').split(' ')[0];
    }
  );
  $(window).on('resize', function() {
    if ($(window).width() <= 1024) {
      $('nav').hide();
      $('#logo').css('padding','0px');
    } else {
      $('nav').fadeIn();
      $('#logo').css('padding-left','73px');
    };
  });
// Animate Hello text
  window.setTimeout(function() {
    $('#hello-txt').addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#hello-txt').removeClass()});
  }, 400);
// Hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);
// Scroll
	$(window).on('scroll', function(){
    var top = $(window).scrollTop(),
        height = $(window).height(),
        width = $(window).width(),
        threshold = height*0.85;
    if (top > threshold) {
      $('nav').addClass('fixed-top').fadeIn().css('box-shadow', '0 calc(8px / 2) 8px rgba(0,0,0,.05)');
      $('#logo').fadeIn();
    }
    if (top <= threshold) {
      $('nav').removeClass('fixed-top').css('box-shadow', 'none');
      $('#logo').fadeOut(400);
      if (width <= 768) {
        $('nav').fadeOut();
      };
    }
    // Timeline stuff
    // On scolling, show/animate timeline blocks when enter the viewport
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

// FullPage stuff
	$('#fullpage').fullpage({
		anchors: ['hello', 'exp', 'skills', 'works', 'about', 'contact'],
		sectionsColor: ['#fff', secColor, '#fff', secColor, '#fff', secColor],
		menu: '#menu',
		css3: true,
		autoScrolling: false,
		scrollOverflow: false,
		responsiveWidth:576,
		scrollingSpeed:500,
		slidesNavigation: true,
		loopHorizontal: false,
    sectionSelector: 'section',
    verticalCentered: false,
    paddingTop: '70px',
    bigSectionsDestination: 'top',
    fitToSection: false,
    onLeave(index, nextIndex, direction) {
      if(nextIndex == 3) {
        window.setTimeout(function() {
          createCircles();
        }, 400);
      }
    },
  });
});
// Close dropdown when click a section on mobile
$(document).on('click','.navbar-collapse',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});
