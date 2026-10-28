function ShowAlert() {
  alert("Click me button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
  alert("Click me Button clicked using JS Event");
}

document.getElementById("Box").addEventListener("click", () => {
  document.getElementById("Box").innerText = "The box was clicked";
});

document.getElementById("nameSubmit").addEventListener("click",()=> {
  document.getElementById("nameSubmit").innerText= "Submitted";

  } );
