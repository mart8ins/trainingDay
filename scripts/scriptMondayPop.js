/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/




/*************************** 
WINDOW OPEN AND CLOSE BUTTON
***************************/

// SUBMIT BUTTON MODULE 
let sumbitButton = (function () {
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
})();






// STORED DATA CONTROLLER
let inputDataController = (function () {


    let Exercise = function (date, exercise, set0, set1, set2, set3) {
        this.date = date;
        this.exercise = exercise;
        this.set0 = set0;
        this.set1 = set1;
        this.set2 = set2;
        this.set3 = set3;
    }

    // place where to store new training day
    let data = {
        training: []
    };

    return {
        addTrainDay: function (date, exercise, set0, set1, set2, set3) {
            let train;
            train = new Exercise(date, exercise, set0, set1, set2, set3);
            data.training.push(train);
        }
    }

})();





// USER INPUT CONTROLLER
let UIinput = (function () {


    // USER input value
    return {
        inputData: function () {
            return {
                datums: document.getElementById('vingrinajumaDatums').value,
                vingrinajumi: document.querySelector('.vingrinajumuIzvele').value,

                svars0: document.querySelector('.svars-0').value,
                svars1: document.querySelector('.svars-1').value,
                svars2: document.querySelector('.svars-2').value,
                svars3: document.querySelector('.svars-3').value,

                rep0: document.querySelector('.rep-0').value,
                rep1: document.querySelector('.rep-1').value,
                rep2: document.querySelector('.rep-2').value,
                rep3: document.querySelector('.rep-3').value
            }
        }
    }
})();



// EVENT CONTROLLER
let controller = (function () {

    let addItem = function () {
        let input;
        // storing user input data
        input = UIinput.inputData();

        console.log(input);

    };

    // click event listener
    let eventListeners = function () {
        document.querySelector('.formPoga').addEventListener('click', addItem);
    }


    // initialize application
    return {
        init: function () {
            eventListeners();
        }
    }
})();

controller.init();