"use strict";

const galleryItems = [
  {
    preview: "img/preview-img-1.jpeg",
    fullview: "img/fullview-img-1.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-2.jpeg",
    fullview: "img/fullview-img-2.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-3.jpeg",
    fullview: "img/fullview-img-3.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-4.jpeg",
    fullview: "img/fullview-img-4.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-5.jpeg",
    fullview: "img/fullview-img-5.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-6.jpeg",
    fullview: "img/fullview-img-6.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-7.jpeg",
    fullview: "img/fullview-img-7.jpeg",
    alt: "new york"
  },
  {
    preview: "img/preview-img-8.jpeg",
    fullview: "img/fullview-img-8.jpeg",
    alt: "new york"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const imageGallery = document.querySelector(".js-image-gallery");

  const fullviewImage = showFullviewImage(galleryItems[0]);
  const previewImages = showPreviewImages(galleryItems);

  imageGallery.innerHTML = fullviewImage;
  imageGallery.innerHTML += previewImages;

  const previewImgs = imageGallery.querySelectorAll(".preview-img");
  const previewActiveImg = previewImgs[0].classList.add("preview-img-active");

  imageGallery.addEventListener("click", onImageGalleryClick);

  function onImageGalleryClick({ target }) {
    const hasClass = target.classList.contains("preview-img");

    if (!hasClass) return;

    const activeFullviewImage = imageGallery.querySelector(".fullview-img");

    activeFullviewImage.setAttribute("src", target.dataset.fullview);

    setActivePreviewImg(previewImgs, target);
  }

  function setActivePreviewImg(previewImgs, target) {
    previewImgs.forEach(previewImg => {
      if (previewImg !== target) {
        previewImg.classList.remove("preview-img-active");
      } else {
        previewImg.classList.add("preview-img-active");
      }
    });
  }

  function showFullviewImage({ fullview }) {
    const fullviewGalleryItem = `                                                                                                                                                                       
      <div class="fullview-item">
        <img class="fullview-img" src="${fullview}" alt="new york">
      </div> 
    `;

    return fullviewGalleryItem;
  }

  function showPreviewImages() {
    const previewGalleryItems = `
  <div class="slider"><ul class="preview-items">
    ${galleryItems.reduce(
      (acc, { preview, fullview, alt }) =>
        acc +
        `
      <li class="preview-item"><img class="preview-img" 
                                    src="${preview}"
                                    data-fullview="${fullview}"
                                    alt="${alt}">
      </li>`,
      ""
    )} 
  </ul></div>`;

    return previewGalleryItems;
  }
});
