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

    // place where to store new training day
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
        testing: function () {
            console.log(data.training);
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
        addItemToDom: function (obj) {
            let html, newHtml;
            html = `<div class='kas'>
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

            newHtml = html.replace('&vingrinajumi&', obj.exercise);
            newHtml = newHtml.replace('&svars0&', obj.svars0);
            newHtml = newHtml.replace('&svars1&', obj.svars1);
            newHtml = newHtml.replace('&svars2&', obj.svars2);
            newHtml = newHtml.replace('&svars3&', obj.svars3);

            newHtml = newHtml.replace('&rep0&', obj.rep0);
            newHtml = newHtml.replace('&rep1&', obj.rep1);
            newHtml = newHtml.replace('&rep2&', obj.rep2);
            newHtml = newHtml.replace('&rep3&', obj.rep3);



            document.querySelector('.vingrinajuma__box').insertAdjacentHTML('afterbegin', newHtml);



        }
    }
})();



// MAIN CONTROLLER
let controller = (function (dataCtrl, UI) {

    let addItem = function () {
        let input, newItem;
        // storing user input data
        input = UI.inputData();
        newItem = dataCtrl.addTrainDay(input.datums, input.vingrinajumi, input.svars0, input.svars1, input.svars2, input.svars3, input.rep0, input.rep1, input.rep2, input.rep3);

        UI.addItemToDom(newItem);

        console.log(newItem);

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