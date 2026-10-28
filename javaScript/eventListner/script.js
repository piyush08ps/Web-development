const showAssbtn = document.getElementById("ShowAssignmentNotification");
const showAttbtn = document.getElementById("ShowAttendenceNotification");
const stopAssbtn = document.getElementById("StopAssignmentNotification");

const assPara = document.getElementById("AsssignmetNotification");
const attPara = document.getElementById("AttendenceNotification");

function ShowAssignment() {
  assPara.textContent = "Your assignment deadline is approaching!";
}

showAssbtn.addEventListener("click", ShowAssignment);

showAssbtn.addEventListener("click", () => {
  attPara.textContent = "Please check your attendence status";
});

stopAssbtn.addEventListener("click", () => {
//   showAssbtn.removeEventListener = ("click", ShowAssignment);

  showAttbtn.removeEventListener("click", () => {
    attPara.textContent = "Please check your attendence status! ";
  });

  assPara.textContent = "Your assignment notification is stopped";
});


const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click", () =>{
    console.log("Parent clicked");
});

child.addEventListener("click", ()=>{
    console.log("Child clicked");
    
});


const stip = document.getElementById("EventCapturing");


function view(){

    console.log("View Button Clicked");
    
}

stip.addEventListener("click", () =>{
    console.log();
    
})