
  $(document).ready(function(){

    var sectionIds = $('a.nav-link');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
      
      
          });
      });

      function checkWidth() {
        if ($(window).width() <= 520) {
            $('#logo').attr('src', 'assets/images/fortis-white-logo.png');
        } else {
            $('#logo').attr('src', 'assets/images/logo.webp');
        }
    }

    checkWidth();

    $(window).resize(function() {
        checkWidth();
    });

    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
      $('.fa-bars').hide();
      $('.fa-xmark').show();
  });

  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
      $('.fa-bars').show();
      $('.fa-xmark').hide();
  });

    $(function() {  
      $( "#accordion" ).accordion();  
    }); 
  
    $(function() {  
      $( "#accordion-2" ).accordion();  
    }); 

  });

  document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.hidden-animation');

  function checkVisibility() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
        const animation = section.getAttribute('data-animation');
        section.classList.add('show-animation', animation);
        section.classList.remove('hidden-animation');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
  
  });
