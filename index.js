//COUNTER  PROGRAM

let count = 0;
document.getElementById("increaseBtn").onclick = function () {
  count++;
  document.getElementById("myLabel").textContent = count;
};
document.getElementById("decreaseBtn").onclick = function () {
  count--;
  document.getElementById("myLabel").textContent = count;
};
document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("myLabel").textContent = count;
};
/* it also work if we put  these document.getElementById in a const variable
like this:  
const increaseBtn = document.getElementById("increaseBtn");
const myLabel = document.getElementById("myLabel");
increaseBtn.onclick = function(){
  count ++ ;
  myLabel.textContent = count;
}
*/