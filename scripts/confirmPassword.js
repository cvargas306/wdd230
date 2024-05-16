const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password")
const message = document.querySelector("#formmessage")

repeatPassword.addEventListener("focusout", CheckSame)

function CheckSame () {
    if (password.value !== repeatPassword.value) {
        message.textContent = "Password does not match. Try again";
        message.style.display = "show";
        repeatPassword.value = "";
        repeatPassword.focus();
    } else {
        message.style.display = "none";
    }
}