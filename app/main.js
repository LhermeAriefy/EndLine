function createPlayer () {
    const newPlayer = document.createElement("div");
    newPlayer.className = "player";
    newPlayer.style.position = "absolute";
    newPlayer.style.height = "150px";
    newPlayer.style.width = "150px";
    newPlayer.style.backgroundColor = "white";

    document.querySelector("main").appendChild(newPlayer);

    return newPlayer;
};

function movePlayer (player, keysPressed) {
    if (keysPressed["w"]) player.yPlayer -= player.speed; // Move para cima
    if (keysPressed["s"]) player.yPlayer += player.speed; // Move para baixo
    if (keysPressed["a"]) player.xPlayer -= player.speed; // Move para a esquerda
    if (keysPressed["d"]) player.xPlayer += player.speed; // Move para a direita

    player.style.marginTop = `${player.yPlayer}px`;
    player.style.marginLeft = `${player.xPlayer}px`;
};

const player = createPlayer();

player.xPlayer = 0;
player.yPlayer = 0;
player.speed = 2.5;

const keysPressed = {};
addEventListener("keydown", (e) => { keysPressed[e.key] = true; });
addEventListener("keyup", (e) => { keysPressed[e.key] = false; });


setInterval(() => {
    movePlayer(player, keysPressed);
}, (60/1000) /*FPS*/);