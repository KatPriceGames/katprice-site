const gallery = document.querySelector('.video-gallery');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const thumbnails = document.querySelectorAll('.video-thumbnail');

let index = 0;
const visibleCount = 4;

function updateGallery() {
    const offset = -index * (100 / visibleCount);
    gallery.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateGallery();
    }
});

rightArrow.addEventListener('click', () => {
    if (index < thumbnails.length - visibleCount) {
        index++;
        updateGallery();
    }
});

updateGallery();