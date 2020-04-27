const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i=1; i<6; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    newImage.setAttribute('onclick', 'ExibeImagem(this)');
    thumbBar.appendChild(newImage);
}


function ExibeImagem(newImage){
    console.log(newImage.getAttribute('src'));
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
    
}



var imageButton = document.querySelector(".dark");

imageButton.addEventListener("click", function(){
    if (imageButton.textContent == "Darken"){
        imageButton.textContent = "Lighten";
        var escureceImagem = document.querySelector(".displayed-img");
        escureceImagem.classList.add("escurece-img");

    }else{
        if (imageButton.textContent == "Lighten"){
            imageButton.textContent = "Darken";
            var escureceImagem = document.querySelector(".displayed-img");
            escureceImagem.classList.remove("escurece-img");
        }
    };
});

