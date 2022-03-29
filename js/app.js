
const myForm = document.querySelector("form");
const myInput = document.querySelector(".emailinput");
const myBtn = document.querySelector("#b");
const myMessege = document.querySelector(".error-messege");



myForm.addEventListener("submit", displayMessege);

function displayMessege(e) {
    e.preventDefault();

    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (myInput.value.length === 0 || !myInput.value.match(emailValidation)) {
        myMessege.style.color = "red";
        myMessege.innerHTML = "please enter valid email !";

        setTimeout(() => myMessege.remove(), 3000);
    }else{
        
        myMessege.style.color = "green";
        myMessege.innerHTML = "Thank you for the subscription";
        
    }
}