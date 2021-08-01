var i = prompt();
if (i >= 80) {
  document.getElementById("demo").innerHTML = "A";
} else if (i >= 70) {
  document.getElementById("demo").innerHTML = "B";
} else if (i >= 60) {
  document.getElementById("demo").innerHTML = "C";
} else if (i >= 50) {
  document.getElementById("demo").innerHTML = "C";
} else if (i <= 49) {
  document.getElementById("logo").innerHTML = "F";
} else {
}
