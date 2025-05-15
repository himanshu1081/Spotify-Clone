var music = new Audio();
function play(file) {
    music.pause();
    music = new Audio(file);
    music.play();
}
 function change(x){
    x.classList.toggle("fa-solid fa-pause");
 }
