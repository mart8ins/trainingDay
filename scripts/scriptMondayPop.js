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

    // object constructor for data
    let Exercise = function (date, exercise, svars0, svars1, svars2, svars3, rep0, rep1, rep2, rep3) {
        this.date = date;
        this.exercise = exercise;
        this.svars0 = svars0;
        this.svars1 = svars1;
        this.svars2 = svars2;
        this.svars3 = svars3;

        this.rep0 = rep0;
        this.rep1 = rep1;
        this.rep2 = rep2;
        this.rep3 = rep3;
    }

    // place where to store object
    let data = {
        training: []
    };


    return {
        addTrainDay: function (date, exercise, svars0, svars1, svars2, svars3, rep0, rep1, rep2, rep3) {
            let train;
            train = new Exercise(date, exercise, svars0, svars1, svars2, svars3, rep0, rep1, rep2, rep3);
            data.training.push(train);
            return train;
        },
        getLastDate: function () {
            let lastDay;
            lastDay = data.training.slice(-1);

            return lastDay;
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
        addExerciseToDom: function (obj, newDate, lastDate) { // addExerciseToDom
            let htmlFull, newHtmlFull, htmlTrain;

            // Ja tiek pievienots jauns datums, vingrinājumi tiks grupēti jaunā konteinerī
            // vingrinājumi tiks grupēti esošā/konkrētā konteinera ietvaros
            htmlFull = `<div id="day__wrapper">
           <div class="new__date">Datums %datums%</div>
           <div class='vingrinajums__new'>
             <div class="vingrinajuma__box">
               <h4>&vingrinajumi&</h4>
               <img src="../image/monday/benchpress.jpg" alt="">
               <div class="result__grid">
                 <div class="result__grid_item kg">&svars0& kg</div>
                 <div class="result__grid_item rep">&rep0&x</div>
                 <div class="result__grid_item kg">&svars1& kg</div>
                 <div class="result__grid_item rep">&rep1&x</div>
                 <div class="result__grid_item kg">&svars2& kg</div>
                 <div class="result__grid_item rep">&rep2&x</div>
                 <div class="result__grid_item kg">&svars3& kg</div>
                 <div class="result__grid_item rep">&rep3&x</div>
               </div>
             </div>
           </div>
         </div>`;

            htmlTrain = `<div class='vingrinajums__new'>
         <div class="vingrinajuma__box">
           <h4>&vingrinajumi&</h4>
           <img src="../image/monday/benchpress.jpg" alt="">
           <div class="result__grid">
             <div class="result__grid_item kg">&svars0& kg</div>
             <div class="result__grid_item rep">&rep0&x</div>
             <div class="result__grid_item kg">&svars1& kg</div>
             <div class="result__grid_item rep">&rep1&x</div>
             <div class="result__grid_item kg">&svars2& kg</div>
             <div class="result__grid_item rep">&rep2&x</div>
             <div class="result__grid_item kg">&svars3& kg</div>
             <div class="result__grid_item rep">&rep3&x</div>
           </div>
         </div>`;

            newHtmlFull = htmlFull.replace('&vingrinajumi&', obj.exercise);
            newHtmlFull = newHtmlFull.replace('%datums%', obj.date)
            newHtmlFull = newHtmlFull.replace('&svars0&', obj.svars0);
            newHtmlFull = newHtmlFull.replace('&svars1&', obj.svars1);
            newHtmlFull = newHtmlFull.replace('&svars2&', obj.svars2);
            newHtmlFull = newHtmlFull.replace('&svars3&', obj.svars3);

            newHtmlFull = newHtmlFull.replace('&rep0&', obj.rep0);
            newHtmlFull = newHtmlFull.replace('&rep1&', obj.rep1);
            newHtmlFull = newHtmlFull.replace('&rep2&', obj.rep2);
            newHtmlFull = newHtmlFull.replace('&rep3&', obj.rep3);


            document.querySelector('.days__container').insertAdjacentHTML('afterbegin', newHtmlFull);


        }
    }
})();



// MAIN CONTROLLER
let controller = (function (dataCtrl, UI) {

    let addItem = function () {
        let input, newItem, lastDate;
        // storing user input data
        input = UI.inputData();

        lastDate = dataCtrl.getLastDate();

        // creating data object and storing it to array
        newItem = dataCtrl.addTrainDay(input.datums, input.vingrinajumi, input.svars0, input.svars1, input.svars2, input.svars3, input.rep0, input.rep1, input.rep2, input.rep3);

        // adding object tu DOM
        UI.addExerciseToDom(newItem, input.datums, lastDate.date);

        console.log(lastDate);


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