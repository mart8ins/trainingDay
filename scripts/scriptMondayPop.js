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

        // returning last stored training days date input
        getLastDate: function () {
            let lastDay, lastDate;
            if (training.length > 0) {
                lastDay = training[training.length - 1];
                lastDate = lastDay[0];
            }
            return lastDate;
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


        addExerciseToDom: function (obj, lastDate) { // addExerciseToDom
            let htmlFull, newHtmlFull, htmlTrain, newHtmlTrain;

            // jaunas dienas konteineris
            htmlFull = `<div id="day__wrapper">
                <div class="new__date">%datums%</div>
                <div class='vingrinajums__new'>
                  <div class="vingrinajuma__box">
                    <h4>&vingrinajumi&</h4>
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
            htmlTrain = `<div class='vingrinajums__new'>
                     <div class="vingrinajuma__box">
                       <h4>&vingrinajumi&</h4>
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

            if (obj[0] !== lastDate) {
                newHtmlFull = htmlFull.replace('&vingrinajumi&', obj[1]);
                switch (obj[1]) {
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
                newHtmlFull = newHtmlFull.replace('%datums%', obj[0])
                newHtmlFull = newHtmlFull.replace('&svars0&', obj[2]);
                newHtmlFull = newHtmlFull.replace('&svars1&', obj[3]);
                newHtmlFull = newHtmlFull.replace('&svars2&', obj[4]);
                newHtmlFull = newHtmlFull.replace('&svars3&', obj[5]);
                newHtmlFull = newHtmlFull.replace('&rep0&', obj[5]);
                newHtmlFull = newHtmlFull.replace('&rep1&', obj[6]);
                newHtmlFull = newHtmlFull.replace('&rep2&', obj[7]);
                newHtmlFull = newHtmlFull.replace('&rep3&', obj[8]);
                document.querySelector('.days__container').insertAdjacentHTML('afterbegin', newHtmlFull);
            } else {

                newHtmlTrain = htmlTrain.replace('&vingrinajumi&', obj[1]);
                switch (obj[1]) {
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
                newHtmlTrain = newHtmlTrain.replace('&svars0&', obj[2]);
                newHtmlTrain = newHtmlTrain.replace('&svars1&', obj[3]);
                newHtmlTrain = newHtmlTrain.replace('&svars2&', obj[4]);
                newHtmlTrain = newHtmlTrain.replace('&svars3&', obj[5]);
                newHtmlTrain = newHtmlTrain.replace('&rep0&', obj[5]);
                newHtmlTrain = newHtmlTrain.replace('&rep1&', obj[6]);
                newHtmlTrain = newHtmlTrain.replace('&rep2&', obj[7]);
                newHtmlTrain = newHtmlTrain.replace('&rep3&', obj[8]);
                document.querySelector('#day__wrapper').insertAdjacentHTML('beforeend', newHtmlTrain);
            }
        }
    }
})();



// MAIN CONTROLLER
let controller = (function (dataCtrl, UI) {

    let addItem = function () {
        let input, newItem, lastDate;

        // storing user input data
        input = UI.inputData();

        // storing last days date
        lastDate = dataCtrl.getLastDate();

        // creating data array for current day and storing it to training in dataCtrl array
        dataCtrl.addTrainDay(input.datums, input.vingrinajumi, input.svars0, input.svars1, input.svars2, input.svars3, input.rep0, input.rep1, input.rep2, input.rep3);

        // returning last stored days data from training array
        newItem = dataCtrl.returnTrainData();
        console.log(newItem);

        // adding last days training data to the DOM
        UI.addExerciseToDom(newItem, lastDate);



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
})(inputDataController, UIinput);

controller.init();



/* nesanaaaak */

let largeResultBox = function () {
    //let ev = event.target.className;
    //console.log(ev)
    let tren = document.getElementsByClassName('vingrinajuma__box');
    tren.classList.toggle('vingrinajuma__box_large');


};

document.querySelector('.days__container').addEventListener('click', largeResultBox);