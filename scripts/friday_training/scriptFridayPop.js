
/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/


/*************************** 
WINDOW OPEN AND CLOSE BUTTON
***************************/

let buttonController = (function () {
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
})();




let training = {
    trainingDay: 'friday',
    trainingData: {
        trainingId: 1,
        trainingDate: 2005 - 05 - 05,
        trainingName: 'squats',
        sets: {
            set1: 1,
            set2: 2,
            set3: 3,
            set4: 4
        },
        repetitions: {
            rep1: 1,
            rep2: 2,
            rep3: 3,
            rep4: 4
        }
    }
}

