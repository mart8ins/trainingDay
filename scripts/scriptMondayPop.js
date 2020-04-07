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





/*************************** 
 STORED DATA CONTROLLER
***************************/

let inputDataController = (function () {

    // place where to store training day data
    let training = [];
    console.log(training)
    return {
        // store data in training array
        addTrainDay: function (...args) {
            let trainArr;
            trainArr = Array.prototype.slice.call(arguments);
            return training.push(trainArr);
        },

        // returning last stored data from array training for DOM manipulation
        returnTrainData: function () {
            return training[training.length - 1];
        },

        // returning full data array
        returnTrainDataFull: function () {
            return training;
        },

        // returning last stored training days date input
        getLastDate: function () {
            let lastDay, lastDate;
            if (training.length > 0) {
                lastDay = training[training.length - 1];
                lastDate = lastDay[1];

            }
            return lastDate;
        },

        // remove exercise from data array
        removeExFromData: function (id) {
            training.forEach(function (val, i) {
                if (val[0] === id) {
                    training.splice(i, 1)
                }
            })
        }
    }
})();



/*************************** 
 USER INPUT CONTROLLER
***************************/
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
        },

        randomNumID: function () {
            return Math.floor(Math.random() * 1000);
        },


        addExerciseToDom: function (obj, lastDate) { // addExerciseToDom
            let htmlFull, newHtmlFull, htmlTrain, newHtmlTrain;

            // jaunas dienas konteineris
            htmlFull = `<div id="day__wrapper">
                <div class="new__date" id=%dateVal%>%datums%</div>
                <div class='vingrinajums__new' id=%idVal%>
                  <div class="vingrinajuma__box">
                  
                    <div class="title-and-remove">
                    <h4>&vingrinajumi&</h4>
                    <p class="remove-exercise">X</p>
                    </div>

                    <img src="../image/monday/%image%.jpg" alt="">
                    <div class="result__grid">
                      <div class="result__grid_item kg">&svars0& kg</div>
                      <div class="result__grid_item rep">&rep0& x</div>
                      <div class="result__grid_item kg">&svars1& kg</div>
                      <div class="result__grid_item rep">&rep1& x</div>
                      <div class="result__grid_item kg">&svars2& kg</div>
                      <div class="result__grid_item rep">&rep2& x</div>
                      <div class="result__grid_item kg">&svars3& kg</div>
                      <div class="result__grid_item rep">&rep3& x</div>
                    </div>
                  </div>
                </div>
              </div>`;

            // vingrinājuma konteineris
            htmlTrain = `<div class='vingrinajums__new' id=%idVal%>
                     <div class="vingrinajuma__box">

                        <div class="title-and-remove">
                        <h4>&vingrinajumi&</h4>
                        <p class="remove-exercise">X</p>
                        </div>

                       <img src="../image/monday/%image%.jpg" alt="">
                       <div class="result__grid">
                         <div class="result__grid_item kg">&svars0& kg</div>
                         <div class="result__grid_item rep">&rep0& x</div>
                         <div class="result__grid_item kg">&svars1& kg</div>
                         <div class="result__grid_item rep">&rep1& x</div>
                         <div class="result__grid_item kg">&svars2& kg</div>
                         <div class="result__grid_item rep">&rep2& x</div>
                         <div class="result__grid_item kg">&svars3& kg</div>
                         <div class="result__grid_item rep">&rep3& x</div>
                       </div>
                     </div>`;

            if (obj[1] !== lastDate) {
                newHtmlFull = htmlFull.replace('&vingrinajumi&', obj[2]);
                switch (obj[2]) {
                    case 'Front squats':
                        newHtmlFull = newHtmlFull.replace('%image%', 'frontSquats');
                        break;
                    case 'Bench press':
                        newHtmlFull = newHtmlFull.replace('%image%', 'benchpress');
                        break;
                    case 'Cable front raise':
                        newHtmlFull = newHtmlFull.replace('%image%', 'frontDeltoidRaise');
                        break;
                    case 'Hammer curl':
                        newHtmlFull = newHtmlFull.replace('%image%', 'hammerCurl');
                        break;
                    case 'Seated cable row':
                        newHtmlFull = newHtmlFull.replace('%image%', 'seatedCableRow');
                        break;
                    case 'Triceps row with rope':
                        newHtmlFull = newHtmlFull.replace('%image%', 'triceps_row');
                        break;
                    case 'Stair mill':
                        newHtmlFull = newHtmlFull.replace('%image%', 'stairmill');
                        break;
                    case 'Tread mill':
                        newHtmlFull = newHtmlFull.replace('%image%', 'treadmill');
                        break;
                };
                newHtmlFull = newHtmlFull.replace('%idVal%', obj[0]);
                newHtmlFull = newHtmlFull.replace('%datums%', obj[1]);
                newHtmlFull = newHtmlFull.replace('%dateVal%', obj[1]); // dienas ID
                newHtmlFull = newHtmlFull.replace('&svars0&', obj[3]);
                newHtmlFull = newHtmlFull.replace('&svars1&', obj[4]);
                newHtmlFull = newHtmlFull.replace('&svars2&', obj[5]);
                newHtmlFull = newHtmlFull.replace('&svars3&', obj[6]);
                newHtmlFull = newHtmlFull.replace('&rep0&', obj[7]);
                newHtmlFull = newHtmlFull.replace('&rep1&', obj[8]);
                newHtmlFull = newHtmlFull.replace('&rep2&', obj[9]);
                newHtmlFull = newHtmlFull.replace('&rep3&', obj[10]);
                document.querySelector('.days__container').insertAdjacentHTML('afterbegin', newHtmlFull);
            } else {

                newHtmlTrain = htmlTrain.replace('&vingrinajumi&', obj[2]);
                switch (obj[2]) {
                    case 'Front squats':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'frontSquats');
                        break;
                    case 'Bench press':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'benchpress');
                        break;
                    case 'Cable front raise':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'frontDeltoidRaise');
                        break;
                    case 'Hammer curl':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'hammerCurl');
                        break;
                    case 'Seated cable row':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'seatedCableRow');
                        break;
                    case 'Triceps row with rope':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'triceps_row');
                        break;
                    case 'Stair mill':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'stairmill');
                        break;
                    case 'Tread mill':
                        newHtmlTrain = newHtmlTrain.replace('%image%', 'treadmill');
                        break;
                };
                newHtmlTrain = newHtmlTrain.replace('%idVal%', obj[0]);
                newHtmlTrain = newHtmlTrain.replace('&svars0&', obj[3]);
                newHtmlTrain = newHtmlTrain.replace('&svars1&', obj[4]);
                newHtmlTrain = newHtmlTrain.replace('&svars2&', obj[5]);
                newHtmlTrain = newHtmlTrain.replace('&svars3&', obj[6]);
                newHtmlTrain = newHtmlTrain.replace('&rep0&', obj[6]);
                newHtmlTrain = newHtmlTrain.replace('&rep1&', obj[7]);
                newHtmlTrain = newHtmlTrain.replace('&rep2&', obj[8]);
                newHtmlTrain = newHtmlTrain.replace('&rep3&', obj[9]);
                document.querySelector('#day__wrapper').insertAdjacentHTML('beforeend', newHtmlTrain);
            }
        },

        removeExerciseFromDOM: function (e) {
            let exercise = e.target.parentElement.parentElement;
            if (e.target.classList.contains('remove-exercise')) {
                e.target.parentElement.parentElement.parentElement.removeChild(exercise);
            }
        }
    }
})();



/*****************************
 Storing data to local storage
 *****************************/

let localStorageControl = (function () {

    return {
        // add training day data to local storage
        addToLocalStorage: function (day, val) {
            let storageData = localStorageControl.getInfoFromLocalStorage(day);
            storageData.push(val);

            localStorage.setItem(day, JSON.stringify(storageData));
        },

        // function to check local storage status, if there is any stored data
        getInfoFromLocalStorage: function (day) {
            let dataLS;
            if (localStorage.getItem(day) === null) {
                dataLS = [];
            } else {
                dataLS = JSON.parse(localStorage.getItem(day));
            }
            return dataLS;
        },


        // function to remove element from localStorage
        removeFromLS: function (date, id) {
            let storageDataRem = localStorageControl.getInfoFromLocalStorage(date);

            storageDataRem.forEach(function (val, i) {
                if (val[0] === id) {
                    storageDataRem.splice(i, 1);
                }
            })

            localStorage.setItem(date, JSON.stringify(storageDataRem));
        }
    }
})();



// MAIN CONTROLLER
let controller = (function (dataCtrl, UI, toLS) {

    let addItem = function () {
        let input, newItem, lastDate, randomID;

        // storing user input data
        input = UI.inputData();
        currentInputDay = input.datums;


        // creating id (random number) for exercise
        randomID = UI.randomNumID();

        // storing last days date
        lastDate = dataCtrl.getLastDate();

        // creating data array for current day and storing it to training in dataCtrl array, also every exercise gets ID
        dataCtrl.addTrainDay(randomID, input.datums, input.vingrinajumi, input.svars0, input.svars1, input.svars2, input.svars3, input.rep0, input.rep1, input.rep2, input.rep3);

        // returning last stored days data from training array
        newItem = dataCtrl.returnTrainData();
        // adding last days training data to the DOM
        UI.addExerciseToDom(newItem, lastDate);

        // add stored data in localStorage
        toLS.addToLocalStorage(currentInputDay, newItem);
    };




    // removing element from DOM and localStorage
    let removeItem = function (e) {
        let exerciseContainer, exerciseContainerID, exercise, date;

        // vingrinajums__new container for new exercise
        exerciseContainer = e.target.parentElement.parentElement.parentElement;
        // ID for exercise
        exerciseContainerID = parseInt(exerciseContainer.getAttribute('id'));

        // current removable exercise - vingrinajums__box
        // exercise = e.target.parentElement.parentElement;

        // targeted days date
        date = e.target.parentElement.parentElement.parentElement.parentElement.children[0].getAttribute('id');

        // remove data from data array in data controller
        dataCtrl.removeExFromData(exerciseContainerID);

        // remove data from local storage
        if (date.includes('-')) { // checks if id contains character -, what is in dates ID
            toLS.removeFromLS(date, exerciseContainerID);
        }

        // removes exercise from DOM
        UI.removeExerciseFromDOM(e);
    };





    // click event listener
    let eventListeners = function () {
        document.querySelector('.formPoga').addEventListener('click', addItem);
        document.querySelector('.days__container').addEventListener('click', removeItem);
    }


    // initialize application
    return {
        init: function () {
            eventListeners();
        }
    }
})(inputDataController, UIinput, localStorageControl);

controller.init();





/* nesanaaaak */
/*
let largeResultBox = function () {
    //let ev = event.target.className;
    //console.log(ev)
    let tren = document.getElementsByClassName('vingrinajuma__box');
    tren.classList.toggle('vingrinajuma__box_large');


};

document.querySelector('.days__container').addEventListener('click', largeResultBox);
*/