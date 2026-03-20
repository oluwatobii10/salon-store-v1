document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.multi-image-card').forEach(card => {
        const images = card.querySelectorAll('.img-slide');
        const circles = card.querySelectorAll('.color-circle');

        circles.forEach((circle, index) => {
            circle.addEventListener('click', () => {
                images.forEach((img, i) => {
                    img.classList.toggle('active', i === index);
                });
            });
        });
    });
});