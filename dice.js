//Dice Image For Player 1
var randomNumber1 = Math.floor(Math.random()*6)+1; //random number 1 to 6
    console.log("randomNumber1: "+randomNumber1);

var randomDiceImage1 = "dice"+randomNumber1+".png"; //"dice6.png"
    console.log("randomDiceImage: "+randomDiceImage1);

var randomImageSource1 = "assets/"+randomDiceImage1;  //"assets/dice6.png"
    console.log("randomImageSource1: " +randomImageSource1);

var image1 = document.querySelectorAll("img")[0];
    console.log(image1);

image1.setAttribute("src",randomImageSource1);

//Dice Image For Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1; //random number 1 to 6
    console.log("randomNumber2: "+randomNumber2);

var randomDiceImage2 = "dice"+randomNumber2+".png"; //"dice6.png"
    console.log("randomDiceImage: "+randomDiceImage2);

var randomImageSource2 = "assets/"+randomDiceImage2;  //"assets/dice6.png"
    console.log("randomImageSource2: " +randomImageSource2);

var image2 = document.querySelectorAll("img")[1];
    console.log(image2);

image2.setAttribute("src",randomImageSource2);

//Logic for Winner

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " ⛳ Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = " ⛳ Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "⛳ Draw!"
}