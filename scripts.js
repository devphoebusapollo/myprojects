let signUpButton = document.querySelector('#sign-up-scroll');
let logInButton = document.querySelector('#log-in-scroll');
logInButton.style.display = "none";
let entirePage = document.documentElement;
let h1 = document.querySelector('h1');
function scrollSignUp() {
    let innerWrapper = document.querySelector('.inner-wrapper');
    innerWrapper.style.transform = "translateX(" + -(50) + "%" + ")";
    signUpButton.style.display = "none";
    logInButton.style.display = "block";
    h1.innerHTML = "Create an account";
}
function scrollLogIn() {
    let innerWrapper = document.querySelector('.inner-wrapper');
    innerWrapper.style.transform = "translateX(" + 0 + "%" + ")";
    logInButton.style.display = "none";
    signUpButton.style.display = "block";
    h1.innerHTML = "Log-In to your account";
}

let inputs = document.getElementsByTagName('input');