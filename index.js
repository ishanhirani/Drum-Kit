let audio;
let len = document.querySelectorAll(".drum").length;
for (let i = 0; i < len; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        let keys = this.innerHTML;
        sound(keys);
        Animation(keys);
    });
}



document.addEventListener("keypress", function(event) {
    sound(event.key);
    Animation(event.key);
});

function sound(keys) {
    switch (keys) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(keys);
            break;
    }
}

function Animation(keys) {
    let activebtn = document.querySelector("." + keys);
    activebtn.classList.add("pressed");
    setTimeout(function() {
        activebtn.classList.remove("pressed");
    }, 200);
}