import refs from "./js/refs.js"
import Photo from "./js/photo.js"
// console.log(refs);
const myGallery = new Photo(refs);
myGallery.init();

refs.list.addEventListener('click', event => {
  myGallery.showOverlay(event);
});

refs.btn.addEventListener('click', event => {
  myGallery.closeOverlay(event);
});

refs.box.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    myGallery.closeOverlay();
  }
});

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    myGallery.closeOverlay();
  }
  if (event.key === 'ArrowRight') {
    myGallery.arrowRight();
  }
  if (event.key === 'ArrowLeft') {
    myGallery.arrowLeft();
  }
});
