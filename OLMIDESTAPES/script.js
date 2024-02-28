const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");
function closeImg(){
    fulImgBox.style.display = "none";
}
function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    });
});
6