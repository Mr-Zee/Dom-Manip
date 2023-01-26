const namebox = document.getElementById("comment");
function myFunction() {
  var l = namebox.value.length;
  var tex = namebox.value;
  console.log(l);
  console.log(document.getElementById("comment").value);
  document.getElementById("len").innerHTML = l;
  document.getElementById("text").innerHTML = tex;
  if (namebox.value.length % 2 == 0) {
    document.getElementById("text").style.color = "red";
  } else {
    document.getElementById("text").style.color = "green";
  }
}
