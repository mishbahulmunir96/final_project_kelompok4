const loginTrigger = document.querySelector("#login-trigger");
const container = document.querySelector(".container-login");

loginTrigger.addEventListener("click", () => {
    container.style.visibility = "visible";
});