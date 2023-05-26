
// Change source of all images 
//  const allImages = document.getElementsByTagName('img');
//  for (let img of allImages) {
//     img.src = ''
//  }

// Change source of images from class square
// const squareImgs = document.getElementsByClassName('square');
// for (let img of squareImgs) {
//     img.src = '';
// }

//Use CSS selectors with querySelector to return objects
// const links = document.querySelectorAll("p a");
// for (let link of links) {
//    console.log(link.href);
// }

//Change CSS styles using JS (not a prefered way!)
// const links = document.querySelectorAll("a");
// for (let link of links) {
//    link.style.color = "cyan";
//    link.style.textDecorationStyle = "wavy"
// }

//Get the current style parameter of an object
// const h1 = document.querySelector("h1");
// console.log("First H1 font size: " + window.getComputedStyle(h1).fontSize);

//Create and append a new DOM element
const newImage = document.createElement('img');
document.body.appendChild(newImage);
newImage.src = "https://fynydd.com/media/1459/html5-video.png?width=800&quality=80"
newImage.classList.add("square");

const newH2 = document.createElement("h2");
newH2.innerText = "More Chickens";
const H1 = document.querySelector("H1");
//H1.insertAdjacentElement("afterend", newH2);
H1.after(newH2);