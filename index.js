// all variables
var round = 1;
var arr = [];
var counter = 0;

$("body").keypress(function() {
    levelUp();
})

$("body").on("tap", function() {
    levelUp();
})

$("button").on("click", function(){
    clickedColor = $(this).attr("id");
    
    $(this).fadeOut().fadeIn();
    var audio = new Audio("sounds/" + clickedColor + ".mp3");
    audio.play();

    if(clickedColor!=arr[counter]){
        $("h1").text("Game Over ! Press a key to start again.");
        counter = 0;
        round = 1;
        arr = [];
    }
    else{
        counter++;
        if(counter==round){
            counter = 0;
            round++;
            levelUp();
        }
    }
})

function levelUp() {
    setTimeout(() => {
        //displaying round number
        $("h1").text("Round " + round);
        
        // generating a random number from 1 to 4
        var color = Math.floor((Math.random() * 4)) + 1;

        // assigning the respective color
        if(color==1){color="green";}
        else if(color==2){color="red";}
        else if(color==3){color="yellow";}
        else if(color==4){color="blue";}

        // adding into the array
        arr.push(color);

        // shooting the color to the user
        $("#"+color).fadeOut().fadeIn();
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
    }, 1000);
}