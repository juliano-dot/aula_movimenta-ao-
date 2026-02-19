const canvas = document.getElementById("jogoCanvas")
const ctx = canvas.getContext("2d")

//Config. Personagem 
let player = {
    x: 1450,
    y: 0,
    tamanho: 70, 
    velocidade:10,
    cor: "white"
};

//Monitor de Teclas
let teclas = {};
window.addEventListener("keydown", (e) => teclas [e.key] = true);
window.addEventListener("keyup", (e) => teclas [e.key] = false);


function atualizar (){

//Movimentaçao no eixo X 
if(teclas["ArrowLeft"]) player.x -= player.velocidade; 
if(teclas["ArrowRight"])player.x += player.velocidade;
//Movimentaçao no eixo Y 
if(teclas["ArrowDown"]) player.y += player.velocidade;
if(teclas["ArrowUp"]) player.y -= player.velocidade;
}

//Limpar a tela e cria o personagem
function desenhar(){
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.fillStyle = player.cor;
ctx.fillRect (player.x, player.y, player.tamanho, player.tamanho);
}
//Iniciar o jogo 
function loop(){
    atualizar();
    desenhar();
    requestAnimationFrame(loop);
}

loop();
//Fim do codigo 