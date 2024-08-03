document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = 'ontouchstart' in document.documentElement;

    if (!isTouchDevice) {
        const cursor = document.getElementById('cursor');
        const cursorFollower = document.getElementById('cursor-follower');

        document.addEventListener('mousemove', function (e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, input, textarea, .swiper-button-prev, .swiper-button-next, .swiper-slide').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorFollower.style.transform = 'scale(1.5) translate(-50%, -50%)';
            });
            element.addEventListener('mouseleave', () => {
                cursorFollower.style.transform = 'scale(1) translate(-50%, -50%)';
            });
        });

        document.addEventListener('mousedown', function () {
            cursor.style.transform = 'scale(0.8) translate(-50%, -50%)';
            cursorFollower.style.transform = 'scale(0.8) translate(-50%, -50%)';
        });

        document.addEventListener('mouseup', function () {
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
            cursorFollower.style.transform = 'scale(1) translate(-50%, -50%)';
        });
    } else {
        document.body.style.cursor = 'default';
    }
});
