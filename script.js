function openImage(src){

  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = src;

}

function closeImage(){

  document.getElementById("lightbox").style.display = "none";

}

const hero = document.querySelector("header");

document.addEventListener("mousemove", (e) => {

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    hero.style.backgroundPosition =
    `${50 + x * 10}% ${50 + y * 10}%`;

});

function openImage(src){

  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = src;
}

function closeImage(){

  document.getElementById("lightbox").style.display = "none";
}