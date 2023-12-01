document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let count = 0;
  let response1 = document.getElementById("search-in").value;
  if (response1 == "Jan Oblak") {
    document.getElementById("output1").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("output1").innerHTML = "incorrect";
  }
  let response2 = document.getElementById("search-in1").value;
  if (response2 == " Manuel Neuer") {
    document.getElementById("output2").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("output2").innerHTML = "incorrect";
  }
  let response3 = document.getElementById("search-in2").value;
  if (response3 == "Cristiano Ronaldo") {
    document.getElementById("output3").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("output3").innerHTML = "incorrect";
  }
  let response4 = document.getElementById("search-in3").value;
  if (response4 == "Lionel Messi") {
    document.getElementById("output4").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("output4").innerHTML = "incorrect";
  }
  document.getElementById("score").innerHTML = count;
}
