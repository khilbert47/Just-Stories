$(document).ready(function () {
    var scrollLink = $('.scroll')
    // Smooth scrolling for better user experience
    scrollLink.click(function (event) {
      event.preventDefault()
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1500)
    })
  })