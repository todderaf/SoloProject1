let homeScore = 0;
let guestScore = 0;
let homescoreEl = document.getElementById('home-score');
let guestscoreEl = document.getElementById('guest-score');

homescoreEl.textContent = homeScore;
guestscoreEl.textContent = guestScore;

function addone(e) {
    if (e === 'home') {
        homeScore += 1;
        homescoreEl.textContent = homeScore;
    }
    else {
        guestScore += 1;
        guestscoreEl.textContent = guestScore;
    }
}

function addtwo(e) {
    if (e === 'home') {
        homeScore += 2;
        homescoreEl.textContent = homeScore;
    }
    else {
        guestScore += 2;
        guestscoreEl.textContent = guestScore;
    }
}

function addthree(e) {
    if (e === 'home') {
        homeScore += 3;
        homescoreEl.textContent = homeScore;
    }
    else {
        guestScore += 3;
        guestscoreEl.textContent = guestScore;
    }
}

function newgame() {
    homeScore = 0;
    guestScore = 0;
    guestscoreEl.textContent = guestScore;
    homescoreEl.textContent = homeScore;
}
