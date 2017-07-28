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
    $('#hello-txt').removeClass().addClass('pulse animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#hello-txt').removeClass();
    });
};
$(document).ready(function() {
  var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8,
      secColor = '#f5f5f7';
  if ($(window).width() <= 1024) {
    $('nav').hide();
    $('#logo').css('padding','0px');
  } else {
    $('nav').fadeIn();
  };
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
      $('.navbar-nav').css('margin-left', '57px');
      $('nav').addClass('fixed-top');
      $('nav').fadeIn();
      $('#logo').fadeIn();
    }
    if (top <= threshold) {
      $('nav').removeClass('fixed-top');
      $('#logo').fadeOut(400, function(){
        $('.navbar-nav').css('margin-left', '194px');
      });
      if (width <= 1024) {
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
  });
});
// Close dropdown when click a section on mobile
$(document).on('click','.navbar-collapse',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});

// Start of Async Drift Code
!function() {
  var t;
  if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
  t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
  t.factory = function(e) {
    return function() {
      var n;
      return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
    };
  }, t.methods.forEach(function(e) {
    t[e] = t.factory(e);
  }), t.load = function(t) {
    var e, n, o, i;
    e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
    n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
  });
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('buadc7m49gfs');
// End of Async Drift Code
