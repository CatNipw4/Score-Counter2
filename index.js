let homeS = document.getElementById("homescore");
let guestS = document.getElementById("guestscore");
let hscore = 0;
let gscore = 0;

function homePlusOne() {
    hscore += 1;
    homeS.textContent = hscore;
}
function homePlusTwo() {
    hscore += 2;
    homeS.textContent = hscore;
}
function homePlusThree() {
    hscore += 3;
    homeS.textContent = hscore;
}

function guestPlusOne() {
    gscore += 1;
    guestS.textContent = gscore;
}
function guestPlusTwo() {
    gscore += 2;
    guestS.textContent = gscore;
}
function guestPlusThree() {
    gscore += 3;
    guestS.textContent = gscore;
}

function reset() {
    gscore = 0;
    hscore = 0;
    guestS.textContent = gscore;
    homeS.textContent = hscore;
}