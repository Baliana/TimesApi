document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("cards-container");
    
    const imagens = [
        './img/img1.png',
        './img/img2.png',
        './img/img3.png',
        './img/img4.png',
        './img/img5.png',
        './img/img6.png',
        './img/img7.png',
        './img/img8.png',
        './img/img9.png',
        './img/img10.png',
        './img/img11.png',
        './img/img12.png',
        './img/img13.png',
        './img/img14.png'
    ];
    
    for (let i = 0; i < imagens.length; i++) {
        let img = document.createElement("img");
        img.src = imagens[i];
        img.alt = `Imagem ${i + 1}`;
        img.className = "card";
        container.appendChild(img);
    }
});
