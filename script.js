const colors = [ "green", "red", "rgba(133,122,200", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // pegar um número aleatório entre 0 e 3

    const numeroAleatorio = pegarNumeroAleatorio();
    // console.log(numeroAleatorio);

    document.body.style.backgroundColor = colors[numeroAleatorio];
    color.textContent = colors[numeroAleatorio];

});

function pegarNumeroAleatorio() {
    return Math.floor(Math.random()*colors.length);
}