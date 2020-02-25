// ***************************************************************************
//  *************************  WEDNESDAY script
// ***************************************************************************


// iegustu main fonu, sākotnējo fonu, kas ir ienākot lapā un pazūd pēc tam, kad sāk navigēt pa vingrinājumiem
let intro_fons = document.getElementById("intro_fons");


// iegustu visus sporta vingrinajumus (kas ir ar class .wednesdayLoop) vienkopus, ko izmantoju tālāk loopaa, lai uzstādītu noklusējumu : style.display = "none"
let wednesdayTraining = document.getElementsByClassName("wednesdayLoop");

let wednesdaySideNav = document.getElementById("wednesdaySideNav");


// **************************************************** LOOPS **********************************************************************

// vingrinājumus noslēpju no redzamības, tie arī neaizņem ekrānā vietu. Izmantoju iepriekš iegūto vingrinājumu kopumu
for (let i = 0; i < wednesdayTraining.length; i++) {
    wednesdayTraining[i].style.display = "none";
}

// Loops, lai noteiktu, ka ja vingrinājumi ir ar display = "none", tad jārāda main fonu, sākotnējo fonu, bet ja sāk navigēt caur vingrinājumiem,
// tad tas pazūd
for (let i = 0; i < wednesdayTraining.length; i++) {
    if (wednesdayTraining[i].style.display == "none") {
        intro_fons.style.display = "block";
    } else {
        intro_fons.style.display = "none";
    }
}

// *************************************** NAVIGĀCIJAS pogu un KONKRĒTU vingrinājumu iegūšana ****************************************

// konkrētu vingrinājumu satura iegušana
let bicepsIso = document.getElementById("bicepsIso");
let chestFly = document.getElementById("chestFly");
let chestOverHead = document.getElementById("chestOverHead");
let lats = document.getElementById("lats");
let shoulderSideRaise = document.getElementById("shoulderSideRaise");
let tricepsRowBar = document.getElementById("tricepsRowBar");
let leg1 = document.getElementById("leg1");
let leg2 = document.getElementById("leg2");
let leg3 = document.getElementById("leg3");

// vingrinājumu navigācijas pogu iegūšana priekš addEventListener
let bicepsIsoNav = document.getElementById("bicepsIsoNav");
let chestFlyNAV = document.getElementById("chestFlyNAV");
let chestOverHeadNav = document.getElementById("chestOverHeadNav");
let latsNav = document.getElementById("latsNav");
let shoulderSideRaiseNav = document.getElementById("shoulderSideRaiseNav");
let tricepsRowBarNav = document.getElementById("tricepsRowBarNav");
let leg1Nav = document.getElementById("leg1Nav");
let leg2Nav = document.getElementById("leg2Nav");
let leg3Nav = document.getElementById("leg3Nav");

// ************************************************* EVENTI ***************************************************************************

// ar loop un if statementu
// Biceps Iso
bicepsIsoNav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != bicepsIso) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Chest fly
chestFlyNAV.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != chestFly) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Chest over head
chestOverHeadNav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != chestOverHead) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Back lats
latsNav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != lats) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Shoulder side raise
shoulderSideRaiseNav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != shoulderSideRaise) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);

// Triceps row bar
tricepsRowBarNav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != tricepsRowBar) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);

// Leg extension
leg1Nav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != leg1) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Leg curls
leg2Nav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != leg2) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);


// Calve curls
leg3Nav.addEventListener("click", function () {
    for (let i = 0; i < wednesdayTraining.length; i++) {
        if (wednesdayTraining[i] != leg3) {
            wednesdayTraining[i].style.display = "none";
            intro_fons.style.display = "none";
        } else {
            wednesdayTraining[i].style.display = "block";
        }
    }
}, true);