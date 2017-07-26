$(document).ready(function() {
  var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame)
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
    console.log('hideou');
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
    console.log('ow');
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
  //let secColor = 'rgba(33, 187, 80, 0.49)';
  let secColor = '#e9f5e0';
	$('#fullpage').fullpage({
		anchors: ['hello','exp', 'skills', 'works', 'about', 'contact'],
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
    verticalCentered: true,
    paddingTop: '56px',
    bigSectionsDestination: 'top',
    fitToSection: false,

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
