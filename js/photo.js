import gallery from '../data/sony-world.js';
// console.log(gallery);

export default class Photo {
  constructor({ list, box, img }) {
    this.list = list;
    this.box = box;
    this.img = img;
    this.gallery = gallery;
  }

  init() {
    window.addEventListener('DOMContentLoaded', this.createGallery());
  }

  createElement(el, index) {
    const title = document.createElement('h2');
    title.textContent = el.title;

    const picture = document.createElement('img');
    picture.setAttribute('src', el.image);
    picture.setAttribute('alt', el.category);
    picture.setAttribute('width', '450px');
    picture.classList.add('gallery-img');
    picture.setAttribute('data-index', index);

    const description = document.createElement('p');
    description.textContent = el.description;

    const subtitle = document.createElement('h3');
    subtitle.innerHTML = `<span>category: ${el.category}</span> `;

    const seria = document.createElement('p');
    seria.innerHTML = `<span>seria: ${el.seria}</span>`;

    const photographer = document.createElement('p');
    photographer.innerHTML = `<span>photographer: ${el.author.name}</span>`;

    const country = document.createElement('p');
    country.innerHTML = `(${el.author.country}<span - ${el.author.city}</span>)`;

    const galleryItem = document.createElement('li');
    galleryItem.setAttribute('class', 'main-item');
    galleryItem.setAttribute('class', 'gallery-item');
    galleryItem.append(
      title,
      picture,
      description,
      subtitle,
      seria,
      photographer,
      country,
    );
    this.list.append(galleryItem);
  }

  createGallery() {
    gallery.map((obj, i) => this.createElement(obj, i));
  }

  showOverlay(event) {
    if (event.target.nodeName === 'IMG') {
      this.box.classList.add('is-open');
      this.img.src = event.target.src;
      this.img.dataset.index = event.target.dataset.index;
    }
  }
  closeOverlay() {
    this.box.classList.remove('is-open');
    this.img.src = '';
  }
  setNewSrc(step, index) {
    this.img.dataset.index = `${index + step}`;
    this.img.src = gallery[index + step].image;
  }
  arrowRight() {
    let index = +this.img.dataset.index;
    if (this.index === gallery.length - 1) {
      this.setNewSrc(0, 0);
      return;
    }
    this.setNewSrc(1, index);
  }
  arrowLeft() {
    let index = +this.img.dataset.index;
    if (index === 0) {
      this.setNewSrc(0, gallery.length - 1);
      return;
    }
    this.setNewSrc(-1, index);
  }
}
