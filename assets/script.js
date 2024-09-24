document.addEventListener('DOMContentLoaded', function() {
    
    const animationContainer = document.createElement('div');
    animationContainer.id = 'lottie-container';
    document.body.appendChild(animationContainer);

    
    const animData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation.json' 
    };

    
    const anim = lottie.loadAnimation(animData);
});

/*
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
*/
jQuery(document).ready(function($) {
    // Trigger on button click
    $('.learn-more-btn').click(function(event) {
        event.preventDefault(); // Prevent default behavior (e.g., link navigation)
        
        // Get the additional info section that's next to the clicked button
        var additionalInfo = $(this).siblings('.additional-info');
        
        // Close any other open .additional-info sections
        $('.additional-info').not(additionalInfo).slideUp();
        
        // Toggle the visibility of the current additional-info section
        additionalInfo.slideToggle();
    });
});


  