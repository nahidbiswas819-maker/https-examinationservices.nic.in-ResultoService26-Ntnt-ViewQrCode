// Genesis Examination Portal

let captcha = "";

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    captcha = "";

    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.querySelector(".captcha").innerText = captcha;
}

function goToResult() {
    const userCaptcha = document.querySelectorAll("input")[2].value;

    if (userCaptcha === captcha) {
        window.location.href = "result.html";
    } else {
        alert("Invalid CAPTCHA! Please try again.");
        generateCaptcha();
    }
}

window.onload = generateCaptcha;
