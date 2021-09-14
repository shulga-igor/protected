//$( window ).load(function() {
  $( document ).ready(function(){
    var prevStep = 0;

    headerSteps(prevStep);
    addaptiveHeight(prevStep);

    // slide blc
    var item = $('.slider-item');
    var width = item.outerWidth();
    var slideBlc = $('.slider-wrap');



    function slide(numSlide){
      
      slideBlc.css({
        'transform' : 'translateX(-'+ width * numSlide +'px)'
      });

    }

    $(document).on('click', '.js-next', function(e){
      e.preventDefault();
      prevStep++;
      slide(prevStep);
      headerSteps(prevStep);
      addaptiveHeight(prevStep);

    })
    function addaptiveHeight(prevStep){
      setTimeout(function(e){
        var getActiveSliderHeight = $('.slider-item').eq(prevStep).outerHeight();
        $('.slider-wrap').height(getActiveSliderHeight);
      }, 100)
     
      
    }
    function headerSteps(prevStep){
      if(prevStep == 0){
        $('.header-steps .steps-list-item').eq(prevStep).addClass('current');
      }else {
        $('.header-steps .steps-list-item').eq(prevStep - 1).addClass('active');
        $('.header-steps .steps-list-item').eq(prevStep).addClass('current');
      }
      
      
    }


    modal();
    function modal(){
      let link = $('.modal-link');
      let close = $('.modal__header .close');
      let linkId = '';
      
      link.on('click', function(e){
        e.preventDefault();
        linkId = $(this).attr('href');
        
        $(linkId).attr('data-visible', 'true');
      })

      close.on('click', function(e){
        e.preventDefault();
        if(linkId != ''){
          $(linkId).attr('data-visible', 'false');
        }
        
      })

    }
   
 
})

