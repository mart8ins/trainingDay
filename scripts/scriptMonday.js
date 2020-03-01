// ***************************************************************************
//  *************************  Monday lapa script
// ***************************************************************************



// iegustu main elementu, sākotnējo fonu, kas ir ienākot lapā un pazūd pēc tam, kad sāk navigēt pa vingrinājumiem
let intro_fons = document.getElementById("intro_fons");


// iegustu visus sporta vingrinajumus (kas ir ar class .mondayLoop) vienkopus, ko izmantoju tālāk loopaa, lai uzstādītu noklusējumu : style.display = "none"
let mondayTraining = document.getElementsByClassName("mondayLoop");


// **************************************************** LOOPS **********************************************************************

// vingrinājumus noslēpju no redzamības, tie arī neaizņem ekrānā vietu. Izmantoju iepriekš iegūto vingrinājumu kopumu
for (let x = 0; x < mondayTraining.length; x++) {
    mondayTraining[x].style.display = "none";
}


// Loops, lai noteiktu, ka ja vingrinājumi ir ar display = "none", tad jārāda main elementu, sākotnējo fonu, bet ja sāk navigēt caur vingrinājumiem,
// tad tas pazūd
for (let i = 0; i < mondayTraining.length; i++) {
    if (mondayTraining[i].style.display == "none") {
        intro_fons.style.display = "block";
    } else {
        intro_fons.style.display = "none";
    }
}
// ******************************************************************************************************************************

// *************************************** NAVIGĀCIJAS pogu un KONKRĒTU vingrinājumu iegūšana ****************************************

// konkrētu vingrinājumu satura iegušana
let frontSquats = document.getElementById("frontSquats");
let benchPress = document.getElementById("benchPress");
let frontDeltoidRaise = document.getElementById("frontDeltoidRaise");
let tricepsRope = document.getElementById("tricepsRope");
let hammerCurl = document.getElementById("hammerCurl");
let stairMill = document.getElementById("stairMill");
let seatedCableRow = document.getElementById("seatedCableRow");
let treadMill = document.getElementById("treadMill");


// vingrinājumu navigācijas pogu iegūšana priekš addEventListener
let frontSquatsNav = document.getElementById("frontSquatsNav");
let benchPressNav = document.getElementById("benchPressNav");
let frontDeltoidRaiseNav = document.getElementById("frontDeltoidRaiseNav");
let tricepsRopeNav = document.getElementById("tricepsRopeNav");
let hammerCurlNav = document.getElementById("hammerCurlNav");
let stairMillNav = document.getElementById("stairMillNav");
let seatedCableRowNav = document.getElementById("seatedCableRowNav");
let treadMillNav = document.getElementById("treadMillNav");


// ************************************************* EVENTI ***************************************************************************
// bez loopa un if statementa

// Front squats event
frontSquatsNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "block";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);


// Bench press event
benchPressNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "block";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);


// Front deltoid raise event
frontDeltoidRaiseNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "block";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);

// Triceps rope event
tricepsRopeNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "block";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);


// Hammer Curl event
hammerCurlNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "block";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);

// Seated cable row event
seatedCableRowNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "block";
    stairMill.style.display = "none";
    treadMill.style.display = "none";
}, true);

// Stair mill event
stairMillNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "block";
    treadMill.style.display = "none";
}, true);

// Tread mill event
treadMillNav.addEventListener("click", function () {
    intro_fons.style.display = "none";
    frontSquats.style.display = "none";
    benchPress.style.display = "none";
    frontDeltoidRaise.style.display = "none";
    tricepsRope.style.display = "none";
    hammerCurl.style.display = "none";
    seatedCableRow.style.display = "none";
    stairMill.style.display = "none";
    treadMill.style.display = "block";
}, true);
