var player1 = "player1";
var player2 = "player2";
player1 = prompt("Enter the Name of the first player (Name should be of max 10 charachters)");
player2 = prompt("Enter the Name of the second Player (Name should be of max 10 charachters)");
if (player1.length > 10)
    player1 = player1.slice(0, 10);
if (player2.length > 10)
    player2 = player2.slice(0, 10);
if (player1.length === 0 || player2.length == 0) {
    alert("Name cannot be Empty");
    location.reload();
}
var para = document.querySelectorAll("p");
para[0].innerHTML = player1;
para[1].innerHTML = player2;

document.querySelector("button").addEventListener("click", function() {
    var first = Math.floor(Math.random() * 6) + 1;
    var second = Math.floor(Math.random() * 6) + 1;

    var firstRandom = "images/dice" + first + ".png";
    var secondRandom = "images/dice" + second + ".png";


    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", firstRandom);
    image2.setAttribute("src", secondRandom);


    if (first > second) {
        document.querySelector("h1").innerHTML = "⛳" + player1 + "Won⛳";
    } else if (second > first) {
        document.querySelector("h1").innerHTML = "⛳" + player2 + "Won⛳";
    } else {
        document.querySelector("h1").innerHTML = "DRAW";
    }
});