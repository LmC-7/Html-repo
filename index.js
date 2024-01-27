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
