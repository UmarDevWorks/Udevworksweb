document.addEventListener('DOMContentLoaded', function() {
    
    const animationContainer = document.createElement('div');
    animationContainer.id = 'lottie-container';
    document.body.appendChild(animationContainer);

    
    const animData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/animation.json' 
    };

    
    const anim = lottie.loadAnimation(animData);
});


jQuery(document).ready(function($) {
    $('.learn-more-btn').click(function(event) {
        event.preventDefault();
        var additionalInfo = $(this).siblings('.additional-info');
        
        $('.additional-info').not(additionalInfo).slideUp();
        additionalInfo.slideToggle();
    });

    $('.learn-more-btn').mouseleave(function() {
        var additionalInfo = $(this).siblings('.additional-info');
        additionalInfo.slideUp();
    });
});


  