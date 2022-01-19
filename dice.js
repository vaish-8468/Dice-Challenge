var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
// switch(randomNumber1){
//   case 1: document.getElementById("dice6")[1].setAttribute("src","images/dice1.png");
//   break;
//   case 2: document.getElementById("dice6")[2].setAttribute("src","images/dice2.png");
//   break;
//   case 3: document.getElementById("dice6")[3].setAttribute("src","images/dice3.png");
//   break;
//   case 4: document.getElementById("dice6")[4].setAttribute("src","images/dice4.png");
//   break;
//   case 5: document.getElementById("dice6")[5].setAttribute("src","images/dice5.png");
//   break;
//   default: document.getElementById("dice6")[6].setAttribute("src","images/dice6.png");
//   break;
// }
// switch(randomNumber2){
//   case 1: document.getElementById("dice")[1].setAttribute("src","images/dice1.png");
//   break;
//   case 2: document.getElementById("dice")[2].setAttribute("src","images/dice2.png");
//   break;
//   case 3: document.getElementById("dice")[3].setAttribute("src","images/dice3.png");
//   break;
//   case 4: document.getElementById("dice")[4].setAttribute("src","images/dice4.png");
//   break;
//   case 5: document.getElementById("dice")[5].setAttribute("src","images/dice5.png");
//   break;
//   default: document.getElementById("dice")[6].setAttribute("src","images/dice6.png");
//   break;
// }
var randomDiceImage="dice"+randomNumber1+".png";
var randomDiceImage1="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomImageSource1="images/"+randomDiceImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";}
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
