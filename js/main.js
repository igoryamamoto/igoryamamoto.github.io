function hello() {
  $(this)
    .removeClass()
    .addClass('pulse animated')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass()
      }
    )
}

function gogo() {
  $('#name-wrapper')
    .removeClass()
    .addClass('hinge animated')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $('#name-wrapper').removeClass()
      }
    )
}

$(document).ready(function() {
  $('#hello-txt').click(hello)
  $('#name').click(gogo)
  // Animate Hello text
  window.setTimeout(function() {
    $('#hello-txt')
      .addClass('pulse animated')
      .one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
          $('#hello-txt').removeClass()
        }
      )
  }, 400)
})
