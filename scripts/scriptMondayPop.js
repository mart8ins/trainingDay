/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/
let buttonPop, popUpWindow, buttonPopClose;

/* storing html elements */
buttonPop = document.getElementById("train-progress-button-m");
popUpWindow = document.getElementById("monday-pop");
buttonPopClose = document.getElementById("monday-close-event");


/* event listeneres */
buttonPop.addEventListener('click', function () {
    popUpWindow.style.display = "block";
});
buttonPopClose.addEventListener('click', function () {
    popUpWindow.style.display = "none";
})
