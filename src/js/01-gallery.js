// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesCardsMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);




function createImagesCardsMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
        </div>
        `
    }).join('');

}

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "bottom"
    });

console.log(galleryItems);

