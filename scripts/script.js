// ***************************************************************************
// ***************************************************************************
// MAIN LAPA - script
// ***************************************************************************
// ***************************************************************************


//  ************************************   motivation lines in index page - mainās backgrounds motivācijas tekstiem

let lines1 = document.getElementById("lines1");
let lines2 = document.getElementById("lines2");
let lines3 = document.getElementById("lines3");

function klausit() {
    // DREAM BIG AND WORK HARD!
    lines1.addEventListener("mouseover", function () {
        lines1.style.backgroundColor = "rgb(33, 81, 107)";
    }, true);
    lines1.addEventListener("mouseleave", function () {
        lines1.style.backgroundColor = "rgb(68, 127, 215)";
    }, true);

    // NO PAIN NO GAIN!
    lines2.addEventListener("mouseover", function () {
        lines2.style.backgroundColor = "rgb(33, 81, 107)";
    }, true);
    lines2.addEventListener("mouseleave", function () {
        lines2.style.backgroundColor = "rgb(68, 127, 215)";
    }, true);

    // STAY STRONG! NO TEARS!
    lines3.addEventListener("mouseover", function () {
        lines3.style.backgroundColor = "rgb(33, 81, 107)";
    }, true);
    lines3.addEventListener("mouseleave", function () {
        lines3.style.backgroundColor = "rgb(68, 127, 215)";
    }, true);

}
klausit();


// ******************************************************  training log - header sadaļā parādās teksts ...from monday till friday...
/*let trainingLog1 = document.getElementById("trainingLog1");
let trainingLog2 = document.getElementById("trainingLog2");

trainingLog1.addEventListener("mouseover", function() {
    trainingLog2.innerHTML = "...from monday till friday";
    trainingLog2.style.fontSize = "18px";
    trainingLog2.style.marginLeft = "90px";
},true)
*/

// **************************************************** HI! THIS IS ME. - NOT
// bildes nomaiņa uz manu īsto bildi un teksts
let itsMe = document.getElementById("itsMe");
let manaBilde = document.getElementById("meNotMeMe");

function nomainitManuBildi() {
    setTimeout(function () {
        itsMe.innerHTML = "But this is real me :)";
        itsMe.style.color = "white";
        itsMe.style.fontSize = "50px";
        manaBilde.src = "image/real_me.jpg";
    }, 3000);
}
nomainitManuBildi();


