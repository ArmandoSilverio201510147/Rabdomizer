//var userName = prompt("Who are you?");

/*var peopleArray = new Array();
peopleArray[0] = new Image();
peopleArray[0] = 'images/drum.jfif';


function image(element) {
    var img = document.getElementById(element);
    for (var i = 0; i <= peopleArray.length; i++) {
        if (peopleArray[i].src == img.src) {
            if (i === peopleArray.length) {
                document.getElementById(element).src = peopleArray[0].src;
                break;
            }
            document.getElementById(element).src = peopleArray[0].src;
            break;
        }
    }
}

document.body.appendChild(peopleArray);*/
var instruments = ["violin", "guitar", "drum"];
var gifts = ["gold", "garbage", "spaceship"];
var kills = ["Pope", "Isabel Queen", "President"];
var imgIns = ["images/drum.jfif", "images/guitar.jfif", "images/violin.jfif"];
var randomNumber = Math.floor(Math.random() * instruments.length);

var instName = instruments[randomNumber];
var gitName = gifts[randomNumber];
var kilName = kills[randomNumber];
var imains = imgIns[randomNumber];

//document.write("Would you like to learn play <strong>" + instName + "</strong>" + " win a lot of <strong>" + gitName + "</strong>" + " and try kill to <strong>" + kilName + "</strong>");

document.write("Would you like to learn play <strong>" + instName + "</strong>" + "  " + imains);