//RANDOM NUMBER

const myButton = document.getElementById("myButton"); //Enter the value from the content of  the html button to this variable named  myButton
const myLabel = document.getElementById("myLabel");        
const mySubmit = document.getElementById("mySubmit");
let min; 
let max ;
let randomNumber;
mySubmit.onclick = function(){
min = document.getElementById("myMin").value;
max = document.getElementById("myMax").value;
min=Number(min);                                                                                //Change the value of the content of min to  number
max=Number(max);
}
myButton.onclick = function(){                                                        //Function that use Math.random() to generate a random number

    randomNumber =Math.floor(Math.random()*max)+min;
    myLabel.textContent= randomNumber;
}
