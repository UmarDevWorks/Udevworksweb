document.addEventListener('DOMContentLoaded', function() {
    let animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/animation.json'
    });

    function resizeLottie() {
        const container = document.getElementById('lottie-container');
        container.style.height = container.offsetWidth * 0.75 + 'px'; 
    }

    window.addEventListener('resize', resizeLottie);
    
    resizeLottie();
});
