// if key is clicked
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this.style.color="white";
        var b=this.innerHTML;
        makeSound(b);
        buttonAnimation(b);
    });
}
    
document.addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(b){
    if(b==="w"){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();

     }
     else if(b==="a"){
         var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
         
     }
     else if(b==="s"){
         var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
         
     }
     else if(b==="d"){
         var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
         
     }
     else if(b==="j"){
         var audio=new Audio("sounds/snare.mp3");
        audio.play();
         
     }
     else if(b==="k"){
         var audio=new Audio("sounds/crash.mp3");
         audio.play();
         
     }
     else if(b==="l"){
         var audio=new Audio("sounds/kick-bass.mp3");
         audio.play();
         
     }else{
         console.log(b);
     }
}

function buttonAnimation(b){
    var activeButton=document.querySelector("."+b);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}
    
