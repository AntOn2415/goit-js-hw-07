import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", onGelleryElClick);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

function onGelleryElClick(e) {
  blockTargetBlank(e);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}

function blockTargetBlank(e) {
  e.preventDefault();
}
