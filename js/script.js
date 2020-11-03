const images = ["img/pic1.jpeg", "img/pic2.jpeg", "img/pic3.jpeg", "img/pic4.jpeg"];
const imageToChange = document.getElementById("image");

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) +1);
    console.log(rnd);
    imageToChange.src = images[rnd];
    
}