function toggleButton() {
    var button = document.getElementById("toggleBtn");
    var message = document.getElementById("message");

    if (button.innerHTML === "Click Me") {
        button.innerHTML = "Unclick";
        message.innerHTML = "Button has been clicked!";
    } else {
        button.innerHTML = "Click Me";
        message.innerHTML = "Button is back to original state.";
    }
}
