var number1=document.querySelectorAll(".drum").length;
for(var i=0; i<number1;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHtml=this.innerHTML;

    makeSound(buttonInnerHtml);
    animation(buttonInnerHtml);
});

}


document.addEventListener("keypress",function(event){
    //alert("Key is pressed");
    makeSound(event.key);
    animation(event.key);

});



function makeSound(key){
    switch(key){
        case "w":var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "a":var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "s":var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "k":var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case "l":var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        default:console.log(key);
    }
}


// the below function is for adding animation to the buttons by passing the current or pressed DOM element as a parameter
function animation(highlight){

    var active=document.querySelector("."+highlight);
    active.classList.add("pressed");
    active.classList.add("whitner");
    setTimeout(function(){
        active.classList.remove("pressed");
        // active.classList.remove("whitner");

    },100);
    setTimeout(function()
    {
        active.classList.remove("whitner");
    },200);
}
// var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
