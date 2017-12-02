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

//////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8;
  if ($(window).width() <= 768) {
    $('nav').hide();
    $('#logo').css('padding','0px');
  } else {
    $('nav').fadeIn();
  };
  $('#hello-txt').click(hello);
  $('#name').click(gogo);
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

  var ctx = document.getElementById('skills-radar').getContext('2d');
  var pointBC = "rgba(12, 156, 92, 0.95)"
  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Web Development', 'Engineering', 'Languages', 'Multidisciplinary', 'Data Science'],
        datasets: [{
            label: "Knowledge",
            backgroundColor: "rgba(12, 156, 92, 0.45)",
            borderColor: "rgba(12, 156, 92, 0.95)",
            //radius: 6,
            //pointRadius: 6,
            //pointBorderWidth: 3,
            pointBackgroundColor: "rgba(12, 156, 92, 0.95)",
            pointBorderColor: [pointBC, pointBC, pointBC, pointBC, pointBC],
            pointHoverRadius: 10,
            data: [89, 75, 67, 80, 85]
        }]
    },
    options: {
      title: {
        display: true,
        text: "Knowledge Distribution",
        position: "top",
        fontSize: 20
      },
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20
        },
        pointLabels: {
          fontSize: 16
        }
      },
      legend: {
        position: 'none'
      },
      tooltips: {
         enabled: false
       }
    }
  });

  var ctx2 = document.getElementById('skills-bar').getContext('2d');
  var pointBC = "rgba(12, 156, 92, 0.95)"
  var myBarChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ['Python', 'SQL', 'Git', 'HTML5/CSS3/JS', 'Angular', 'React.js', 'Matlab', 'LabVIEW', 'C', 'English', 'Portuguese'],
        datasets: [{
            label: "Tools",
            backgroundColor: ["#0098CA", "#0098CA", "#ff5656","#ff5656","#ff5656", "#ff5656", "#ffd668", "#ffd668", "#ffd668", "#009B3A", "#009B3A"],
            data: [95, 72, 89, 88, 75, 77, 76, 69, 65, 82, 99]
        }]
    },
    options: {
      title: {
        display: true,
        text: "Tools",
        position: "top",
        fontSize: 20
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20
          }
        }],
        yAxes: [{
        }]
      },
      legend: {
        position: 'none'
      },
      tooltips: {
         enabled: false
       }
    }

  });

  var secColor = '#f5f5f7';
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
    fitToSection: false
  });

});
// Close dropdown when click a section on mobile
$(document).on('click','.navbar-collapse',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});
