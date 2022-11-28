const images = document.querySelectorAll(".animated-img");
// const callback = function (entries) {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("fadeInLeft");
//   });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".animated-1");
// targets.forEach(function (target) {
//   observer.observe(target);
// });

// image callback function

const imageObserverCallback = (imagesToWatch, imageObserver) => {
  imagesToWatch.forEach((imageToWatch) => {
    if (imageToWatch.isIntersecting) {
      imageToWatch.target.classList.add("fade");
      console.log("toggle");
    }
  });
};

// image options

const imageObserverOptions = {
  threshold: 0.4,
};

// image observer

const imageObserver = new IntersectionObserver(
  imageObserverCallback,
  imageObserverOptions
);

// image observer on images

images.forEach((image) => {
  imageObserver.observe(image);
});
