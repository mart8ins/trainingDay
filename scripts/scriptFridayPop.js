/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/
let buttonPop, popUpWindow, buttonPopClose;

/* storing html elements */
buttonPop = document.getElementById("train-progress-button-f");
popUpWindow = document.getElementById("friday-pop");
buttonPopClose = document.getElementById("friday-close-event");


/* event listeneres */
buttonPop.addEventListener('click', function () {
    popUpWindow.style.display = "block";
});
buttonPopClose.addEventListener('click', function () {
    popUpWindow.style.display = "none";
})