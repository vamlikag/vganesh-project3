// implement behavioral requirements of project3
const game = new BaseballGame();

window.onload = function(){
    let keyValue = game.keyMethod();
    document.getElementById('key').innerHTML = keyValue;
    game.keyGenerate();
}
document.getElementById('new').addEventListener('click',game.keyGenerate);