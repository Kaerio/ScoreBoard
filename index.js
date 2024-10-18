let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");
// console.log(homeScoreEl);
// console.log(guestScoreEl);

let homeScore =0;
let guestScore = 0;
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

let homeBtn1 = document.getElementById("home-btn1");
let homeBtn2 = document.getElementById("home-btn2");
let homeBtn3 = document.getElementById("home-btn3");

let guestBtn1 = document.getElementById("guest-btn1");
let guestBtn2 = document.getElementById("guest-btn2");
let guestBtn3 = document.getElementById("guest-btn3");

let resetBtn = document.getElementById("reset-btn");

function add1ToHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function add2ToHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function add3ToHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function add1ToGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function add2ToGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function add3ToGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}