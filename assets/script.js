jQuery(document).ready(function($) {
    // Trigger on button click
    $('.learn-more-btn').click(function(event) {
        event.preventDefault();
        
        
        var additionalInfo = $(this).siblings('.additional-info');
        
        
        $('.additional-info').not(additionalInfo).slideUp();
        
        
        additionalInfo.slideToggle();
    });
});

$(document).ready(function() {
    let animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation.json' 
    });

    
    function resizeLottie() {
        const container = $('#lottie-container');
        container.css('height', container.width() * 0.75); 
    }

    $(window).on('resize', resizeLottie);
    resizeLottie(); 
});
