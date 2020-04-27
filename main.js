const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

imageButton.addEventListener("click", function(){
    if (imageButton.textContent == "Darken"){
        imageButton.textContent = "Lighten";
    }else{
        if (imageButton.textContent == "Lighten"){
            imageButton.textContent = "Darken";
        }
    };
});
