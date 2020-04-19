
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


{
    let exercise = {
        trainingDay: 'Friday',
        trainingData: {
            exerciseId: 1,
            exerciseDate: '2005-05-05',
            exerciseName: 'squats',
            exerciseData: {
                set: 'set 1',
                weight: 22,
                repetitions: 8
            }
        }
    }
}

/**************************************
 * FORM INPUT AND DATA OUTPUT
 * ************************************/

// REAL DATA CONTROLER
let dataControler = (function () {

    let training = [];

    // object for exercise data storing
    let Exercise = function (trainingDay, exerciseId, exerciseDate, exerciseName, set, weight, repetitions) {
        this.trainingDay = trainingDay;
        this.exerciseId = exerciseId;
        this.exerciseDate = exerciseDate;
        this.exerciseName = exerciseName;
        this.set = set;
        this.weight = weight;
        this.repetitions = repetitions;
    }

    return {
        addDataToTraining: function (trainingDay, exerciseId, exerciseDate, exerciseName, set, weight, repetitions) {
            training.push(new Exercise(trainingDay, exerciseId, exerciseDate, exerciseName, set, weight, repetitions));
        }
    }
})();


/*********************************** */
// CONTROLER FOR UI INPUT AND OUTPUT
/************************************* */
let UIcontroler = (function () {
    return {
        // get input data
        getInputData: function () {
            return {
                exerciseDay: document.querySelector('.exercise__day').textContent,
                exerciseId: UIcontroler.createID(),
                exerciseDate: document.getElementById('exercise__date__input').value,
                exerciseName: document.querySelector('.exercise__name').value,
                exerciseSet: document.querySelector('.setValue').value,
                exerciseWeight: document.getElementById('svars-0').value,
                exerciseRepetitions: document.getElementById('rep-0').value,

            }
        },
        // create ID for current Input data
        createID: function () {
            return Math.floor(Math.random() * 1000);
        }
    }
})();



/************************************ */
// CONTROLER FOR DATA IN LOCAL STORAGE
/*************************************** */
let LScontroler = (function () {

    return {
        getFromLS: function () {
            let trainingStorage;
            if (localStorage.getItem('training') === null) {
                trainingStorage = [];

            } else {
                trainingStorage = JSON.parse(localStorage.getItem('training'));
            }
            return trainingStorage;
        },

        storeToLS: function (val) {
            let trainStorage = LScontroler.getFromLS();
            trainStorage.push(val);
            localStorage.setItem('training', JSON.stringify(trainStorage));

        }
    }
})();



/********************************* */
// MAIN CONTROLLER
/********************************** */
let controler = (function (dataCTRL, uiCTRL, lsCTRL) {

    function addItem(e) {
        e.preventDefault();

        // input data from UI controller
        let input = uiCTRL.getInputData();

        // created exercise ID
        let inputID = uiCTRL.createID();

        // storing input data with construcotr function in data array training
        dataCTRL.addDataToTraining(input.exerciseDay, inputID, input.exerciseDate, input.exerciseName, input.exerciseSet, input.exerciseWeight, input.exerciseRepetitions);

        // storing this data to localStorage
        lsCTRL.storeToLS(input);
    }

    // all event listener function
    let eventListeners = function () {
        let sumbitbtn = document.getElementById('form__submit');
        sumbitbtn.addEventListener('click', addItem);
    }

    return {
        init: function () {
            eventListeners();
        }
    }
})(dataControler, UIcontroler, LScontroler);

controler.init();










