var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = "dice/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = "dice/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Draw";
}else{
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
