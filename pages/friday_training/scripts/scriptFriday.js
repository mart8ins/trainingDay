// ***************************************************************************
//  *************************  FRIDAY script
// ***************************************************************************



// iegustu main fonu, sākotnējo fonu, kas ir ienākot lapā un pazūd pēc tam, kad sāk navigēt pa vingrinājumiem
let intro_fons = document.getElementById("intro_fons");



// iegustu visus sporta vingrinajumus (kas ir ar class .fridayLoop) vienkopus, ko izmantoju tālāk loopaa, 
// lai uzstādītu noklusējumu : style.display = "none"
let fridayTraining = document.getElementsByClassName("fridayLoop");

// iegūstu sānu navigācijas div//parent elementu - ko izmantoju event Listener
let fridaySideNav = document.querySelector(".fridaySideNav");


// **************************************************** LOOPS **********************************************************************

// vingrinājumus noslēpju no redzamības, tie arī neaizņem ekrānā vietu. Izmantoju iepriekš iegūto vingrinājumu kopumu
// ja vingrinājumi ir ar display = "none", tad jārāda main fonu, sākotnējo fonu, bet ja sāk navigēt caur vingrinājumiem,
// tad tas pazūd
for (let i = 0; i < fridayTraining.length; i++) {
    fridayTraining[i].style.display = "none";
    if (fridayTraining[i].style.display == "none") {
        intro_fons.style.display = "block";
    }
}


// *************************************** NAVIGĀCIJAS pogu un KONKRĒTU vingrinājumu iegūšana ****************************************



// konkrētu vingrinājumu satura iegušana
let armsbarbell = document.getElementById("armsbarbell");
let chest_cable_down = document.getElementById("chest_cable_down");
let chest_cable_up = document.getElementById("chest_cable_up");
let deadlift = document.getElementById("deadlift");
let overheadPress = document.getElementById("overheadPress");
let shoulder_back = document.getElementById("shoulder_back");
let triceps_row_behind = document.getElementById("triceps_row_behind");

// vingrinājumu navigācijas pogu iegūšana priekš addEventListener
let armsbarbellNav = document.getElementById("armsbarbellNav");
let chest_cable_downNav = document.getElementById("chest_cable_downNav");
let chest_cable_upNav = document.getElementById("chest_cable_upNav");
let deadliftNav = document.getElementById("deadliftNav");
let overheadPressNav = document.getElementById("overheadPressNav");
let shoulder_backNav = document.getElementById("shoulder_backNav");
let triceps_row_behindNav = document.getElementById("triceps_row_behindNav");


// ************************************************* EVENTI ***************************************************************************

// listeners parent elementam, iekš kura atrodas navigācijas pogas

fridaySideNav.addEventListener("click", doIt);

// funkcija, kas parāda attiecīgu vingrinājumu div elementu, bet nevajadzīgos patur slēptus

function doIt(event) {
    if (event.target !== event.currentTarget) {
        let clickedItem = event.target.id;

        if (clickedItem === "armsbarbellNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "block";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "none";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "chest_cable_downNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "block";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "none";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "chest_cable_upNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "block";
            deadlift.style.display = "none";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "deadliftNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "block";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "overheadPressNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "none";
            overheadPress.style.display = "block";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "shoulder_backNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "none";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "block";
            triceps_row_behind.style.display = "none";
        }

        if (clickedItem === "triceps_row_behindNav") {
            intro_fons.style.display = "none";
            armsbarbell.style.display = "none";
            chest_cable_down.style.display = "none";
            chest_cable_up.style.display = "none";
            deadlift.style.display = "none";
            overheadPress.style.display = "none";
            shoulder_back.style.display = "none";
            triceps_row_behind.style.display = "block";
        }
    }
}
