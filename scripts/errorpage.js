// Redirect for Login Page

let backButton = document.getElementById("error-page-button");


backButton.addEventListener('click',backtoIndex);


function backtoIndex() {
    window.location.href = "http://127.0.0.1:5500/index.html";
}


let instaIcon = document.getElementById("instagram-icon");
let twitterIcon = document.getElementById("twitter-icon");
let youtubeIcon = document.getElementById("youtube-icon");
let facebookIcon = document.getElementById("facebook-icon");


// Social Media Redirect Events

facebookIcon.addEventListener('click',facebookRedirect);


function facebookRedirect() {
    window.location.href = "https://pt-br.facebook.com/";
}

instaIcon.addEventListener('click',instaRedirect);


function instaRedirect() {
    window.location.href = "https://www.instagram.com/";
}


twitterIcon.addEventListener('click',twitterRedirect);


function twitterRedirect() {
    window.location.href = "https://x.com/?lang=pt-br";
}


youtubeIcon.addEventListener('click',youtubeRedirect);


function youtubeRedirect() {
    window.location.href = "https://www.youtube.com/?hl=pt&hl=pt";
}