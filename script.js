
gsap.registerPlugin(Draggable);
let imagesList = document.querySelectorAll("ul li img");
let imageBox = document.querySelector(".imageBox img");
console.log(imagesList[0])

imagesList.forEach(img => {
    img.addEventListener("click", () => {
        imageBox.src = `${img.currentSrc}`;
        
    });
});

let t1 = gsap.timeline();

t1.to(".title", { duration: 2, scale: 1.1 }, "-=0.5")
    .to(".title", { duration: 2, scale: 1 }, "-=0.5")
    

Draggable.create(imageBox, {
  bounds: ".imageBox",
  throwProps: true,
  autoScroll: 2,
  dragClickables: true,
    onRelease: () => {

  }
});
 


