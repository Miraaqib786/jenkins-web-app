function toggleButton() {
    var button = document.getElementById("toggleBtn");
    var message = document.getElementById("message");

    if (button.innerHTML === "Click Me") {
        button.innerHTML = "Unclick";
        message.innerHTML = "Welcome to Jenkins world - Jenkins got Thrilled! ";
    } else {
        button.innerHTML = "Click Me";
        message.innerHTML = "Thanks for Visiting Jenkins - Jenkins got Sad! ";
    }
}
