/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/
let buttonPop, popUpWindow, buttonPopClose;

/* storing html elements */
buttonPop = document.getElementById("train-progress-button-w");
popUpWindow = document.getElementById("wednesday-pop");
buttonPopClose = document.getElementById("wednesday-close-event");


/* event listeneres */
buttonPop.addEventListener('click', function () {
    popUpWindow.style.display = "block";
});
buttonPopClose.addEventListener('click', function () {
    popUpWindow.style.display = "none";
})
