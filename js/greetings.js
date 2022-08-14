const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");

    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const hours = new Date().getHours();
    const textArray = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night", "hello"];
    let text = textArray[4];
    console.log(text);
    if( (21 <= hours) || (hours <= 5) ) {
        text = textArray[3];
    } else if( (5 < hours) && (hours <= 10) ) {
        text = textArray[0];
    } else if( (10 < hours) && (hours <= 17) ) {
        text = textArray[1];
    } else if( (17 < hours) && (hours < 21) ) {
        text = textArray[2];
    } else {
        text = textArray[4];
    }
    
    greeting.innerText = `${text}, ${username}`;
    greeting.classList.remove("hidden");
  }
  
const savedUsername = localStorage.getItem("username");
if( savedUsername === null ) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}



