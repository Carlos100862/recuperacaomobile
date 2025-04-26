// Lista de imagens e textos para o card
let cardContent = [
    { image: "img/woldwalking-removebg-preview.png", text: "Encontre milhares de possibilidades para sua próxima viagem" },
    { image: "img/pigcoin-removebg-preview.png", text: "Receba bonificações por suas viagens e manuseie seu saldo no aplicativo" },
    { image: "img/hotelbooking-removebg-preview.png", text: "Troque seus pontos acumulados por descontos ou prêmios." }
];

let currentIndex = 0;

// Função para mudar a imagem e o texto do card
function changeImage(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? cardContent.length - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex === cardContent.length - 1) ? 0 : currentIndex + 1;
    }

    document.getElementById("card-image").src = cardContent[currentIndex].image;
    document.getElementById("card-text").innerHTML = `<p>${cardContent[currentIndex].text}</p>`;
}
