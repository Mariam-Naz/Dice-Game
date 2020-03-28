//player-1
var randomNumber1=Math.floor(Math.random()*6)+1;
var image_half1="dice"+randomNumber1+".png";
var image1="images/"+image_half1;

document.querySelectorAll('img')[0].setAttribute('src',image1);

//player-2
var randomNumber2=Math.floor(Math.random()*6)+1;
var image_half2="dice"+randomNumber2+".png";
var image2="images/"+image_half2;

document.querySelectorAll('img')[1].setAttribute('src',image2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
    document.querySelector("h1").style.fontSize='7rem';
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
    document.querySelector("h1").style.fontSize='7rem';
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}