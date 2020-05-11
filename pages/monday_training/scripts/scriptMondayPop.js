
/*********************************************** POPUP WINDOW FOR TRAINING PROGRSS **************************************************/

/*************************** 
WINDOW OPEN AND CLOSE BUTTON
***************************/

let buttonController = (function () {
    let buttonPop, popUpWindow, buttonPopClose;

    /* storing html elements */
    buttonPop = document.getElementById("train-progress-button-m");
    popUpWindow = document.getElementById("monday-pop");
    buttonPopClose = document.getElementById("monday-close-event");


    /* event listeneres */
    buttonPop.addEventListener('click', function () {
        popUpWindow.style.display = "block";
        document.getElementsByTagName("body")[0].style.overflowY = 'hidden';

    });
    buttonPopClose.addEventListener('click', function () {
        popUpWindow.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflowY = 'auto';

    })
})();


/**************************************
 * FORM INPUT AND DATA OUTPUT
 * ************************************/

// REAL DATA CONTROLER
let dataControler = (function () {

    let training = [];
    console.log(training)
    // object for exercise data storing
    let Exercise = function (
        trainingDay, exerciseId, exerciseDate, exerciseName,
        set1, weight1, rep1,
        set2, weight2, rep2,
        set3, weight3, rep3,
        set4, weight4, rep4) {

        this.trainingDay = trainingDay;
        this.exerciseId = exerciseId;
        this.exerciseDate = exerciseDate;
        this.exerciseName = exerciseName;

        this.set1 = set1;
        this.weight1 = weight1;
        this.rep1 = rep1;

        this.set2 = set2;
        this.weight2 = weight2;
        this.rep2 = rep2;

        this.set3 = set3;
        this.weight3 = weight3;
        this.rep3 = rep3;

        this.set4 = set4;
        this.weight4 = weight4;
        this.rep4 = rep4;
    }

    return {
        addDataToTraining: function (
            trainingDay, exerciseId, exerciseDate, exerciseName,
            weight1, rep1,
            weight2, rep2,
            weight3, rep3,
            weight4, rep4) {
            training.push(new Exercise(
                trainingDay, exerciseId, exerciseDate, exerciseName,
                weight1, rep1,
                weight2, rep2,
                weight3, rep3,
                weight4, rep4));
        },

        trainingDates: function () {
            let datesArr = [];
            training.forEach(function (date) {
                datesArr.push(date.exerciseDate)
            })
            return datesArr;
        },

        returnExerciseIDs: function () {
            let arrIDs = [];
            training.forEach(function (val, i) {
                arrIDs.push(val.exerciseId)
            });
            return arrIDs;
        },
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
                exWeight1: document.getElementById('weight-1').value,
                exWeight2: document.getElementById('weight-2').value,
                exWeight3: document.getElementById('weight-3').value,
                exWeight4: document.getElementById('weight-4').value,
                exRep1: document.getElementById('rep-1').value,
                exRep2: document.getElementById('rep-2').value,
                exRep3: document.getElementById('rep-3').value,
                exRep4: document.getElementById('rep-4').value
            }
        },
        // create unique ID for current Input data
        createID: function (ids) {
            let cur, arr;
            arr = ids;
            cur = Math.floor(Math.random() * 1000);
            if (arr) {
                // cheking if ID already exists if it does, generate new
                for (let i = 0; i <= arr.length; i++) {
                    if (cur === arr[i]) {
                        cur = Math.floor(Math.random() * 1000);
                    } else {
                        return cur;
                    }
                }
            }
            return cur;

        },

        exerciseToDom: function (obj, objID, dates) {
            let exerciseFull, newExercise, curImg, training__data__container, childArrIDS,
                current__training__day, isThereAnyData;


            // setting image url to current exercise
            switch (obj.exerciseName) {
                case 'Front squats':
                    curImg = 'frontSquats';
                    break;
                case 'Bench press':
                    curImg = 'benchpress';
                    break;
                case 'Cable front raise':
                    curImg = 'frontDeltoidRaise';
                    break;
                case 'Triceps row with rope':
                    curImg = 'triceps_row';
                    break;
                case 'Hammer curl':
                    curImg = 'hammerCurl';
                    break;
                case 'Seated cable row':
                    curImg = 'seatedCableRow';
                    break;
                case 'Stair mill':
                    curImg = 'stairmill';
                    break;
                case 'Tread mill':
                    curImg = 'treadmill';
                    break;
            }

            // pilns exercise!
            exerciseFull = `
            <div class="exercise__date__container" id=${obj.exerciseDate}>

                                    <div class="exercise__date__new">
                                    <div class=exercise__date__value>${obj.exerciseDate}</div>
                                    <div class="exercise__date__remove">X</div>
                                    </div>
  
            <!-- **************************************** exercise  *********************************************-->
                                    <div class="exercise__new" id=${objID}>
                                        <div class="title__remove__container">
                                            <div class="exercise__title__data">${obj.exerciseName}</div>
                                            <div class="exercise__remove">X</div>
                                        </div>
                                        <div class="exercise__img" style="background-image: url(../../image/monday/${curImg}.jpg)"></div>
                                        <div class="exercise__progres">
                                            <div class="result__grid__item">Weight</div>
                                            <div class="result__grid__item">Repetitions</div>
                                            <div class="result__grid__item kg">${obj.exWeight1} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep1} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight2} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep2} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight3} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep3} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight4} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep4} x</div>
                                        </div>
                                    </div>
  
             </div>`


            newExercise = `
                                    <div class="exercise__new" id=${objID}>
                                        <div class="title__remove__container">
                                            <div class="exercise__title__data">${obj.exerciseName}</div>
                                            <div class="exercise__remove">X</div>
                                        </div>
                                        <div class="exercise__img" style="background-image: url(../../image/monday/${curImg}.jpg)"></div>
                                        <div class="exercise__progres">
                                            <div class="result__grid__item">Weight</div>
                                            <div class="result__grid__item">Repetitions</div>
                                            <div class="result__grid__item kg">${obj.exWeight1} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep1} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight2} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep2} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight3} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep3} x</div>
                                            <div class="result__grid__item kg">${obj.exWeight4} kg</div>
                                            <div class="result__grid__item rep">${obj.exRep4} x</div>
                                        </div>
                                    </div>
            `

            if (obj.exerciseDate) { // checks if input date exists when user whants to add training info
                isThereAnyData = 0;
                for (let i = 0; i < dates.length; i++) {
                    if (obj.exerciseDate === dates[i]) {
                        isThereAnyData = 1;
                    }
                }

                if (isThereAnyData === 1) {
                    // new exercise to current date is added if current date is already existing
                    training__data__container = document.querySelector('.train__data__container').children;
                    childArrIDS = [];
                    // existing training days ID is pushed in childArrIDS, ID is the date, example 2020-04-30
                    for (let i of training__data__container) {
                        childArrIDS.push(i.getAttribute('id'));
                    }
                    // in that current dates object is added new exercise
                    childArrIDS.forEach(function (id) {
                        if (obj.exerciseDate === id) {
                            current__training__day = document.getElementById(id).children[1];
                            console.log(current__training__day)
                            current__training__day.insertAdjacentHTML('beforebegin', newExercise);
                        }
                    });
                } else {
                    // new training day/date is added
                    document.querySelector('.train__data__container').insertAdjacentHTML('afterbegin', exerciseFull);
                }
            }
        }
    }
})();

// document.querySelector('.all__exercises').insertAdjacentHTML('afterbegin', exercise);
// document.querySelector('.train__data__container').insertAdjacentHTML('beforeend', exerciseDay);

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

        },

        dataFromLsOnLoad: function () {
            let exeDay, exeId, exeDate, exeName, exWeight1, exWeight2, exWeight3, exWeight4, exRep1, exRep2, exRep3, exRep4, exerciseFull, exercise
            let trainStorage = LScontroler.getFromLS();

            trainStorage.forEach(val => {
                exeDay = val.exerciseDay;
                exeId = val.exerciseId;
                exeDate = val.exerciseDate;
                exeName = val.exerciseName;
                exWeight1 = val.exWeight1;
                exWeight2 = val.exWeight2;
                exWeight3 = val.exWeight3;
                exWeight4 = val.exWeight4;
                exRep1 = val.exRep1;
                exRep2 = val.exRep2;
                exRep3 = val.exRep3;
                exRep4 = val.exRep4;
                console.log(exeDay)
                if (exeDay === 'Monday') {
                    switch (exeName) {
                        case 'Front squats':
                            curImg = 'frontSquats';
                            break;
                        case 'Bench press':
                            curImg = 'benchpress';
                            break;
                        case 'Cable front raise':
                            curImg = 'frontDeltoidRaise';
                            break;
                        case 'Triceps row with rope':
                            curImg = 'triceps_row';
                            break;
                        case 'Hammer curl':
                            curImg = 'hammerCurl';
                            break;
                        case 'Seated cable row':
                            curImg = 'seatedCableRow';
                            break;
                        case 'Stair mill':
                            curImg = 'stairmill';
                            break;
                        case 'Tread mill':
                            curImg = 'treadmill';
                            break;
                    }

                    exerciseFull = `
                        <div class="exercise__date__container" id=${exeDate}>
        
                            <div class="exercise__date__new">
                                <div class=exercise__date__value>${exeDate}</div>
                                <div class="exercise__date__remove">X</div>
                            </div>
            
                            <!-- **************************************** exercise  *********************************************-->
                            <div class="exercise__new" id=${exeId}>
                                <div class="title__remove__container">
                                    <div class="exercise__title__data">${exeName}</div>
                                    <div class="exercise__remove">X</div>
                                </div>
                                <div class="exercise__img" style="background-image: url(../../image/monday/${curImg}.jpg)"></div>
                                <div class="exercise__progres">
                                    <div class="result__grid__item">Weight</div>
                                    <div class="result__grid__item">Repetitions</div>
                                    <div class="result__grid__item kg">${exWeight1} kg</div>
                                    <div class="result__grid__item rep">${exRep1} x</div>
                                    <div class="result__grid__item kg">${exWeight2} kg</div>
                                    <div class="result__grid__item rep">${exRep2} x</div>
                                    <div class="result__grid__item kg">${exWeight3} kg</div>
                                    <div class="result__grid__item rep">${exRep3} x</div>
                                    <div class="result__grid__item kg">${exWeight4} kg</div>
                                    <div class="result__grid__item rep">${exRep4} x</div>
                                </div>
                            </div>
        
                        </div>
                                `

                    exercise = `
                        <div class="exercise__new" id=${exeId}>
                                    <div class="title__remove__container">
                                        <div class="exercise__title__data">${exeName}</div>
                                        <div class="exercise__remove">X</div>
                                    </div>
                                    <div class="exercise__img" style="background-image: url(../../image/monday/${curImg}.jpg)"></div>
                                    <div class="exercise__progres">
                                        <div class="result__grid__item">Weight</div>
                                        <div class="result__grid__item">Repetitions</div>
                                        <div class="result__grid__item kg">${exWeight1} kg</div>
                                        <div class="result__grid__item rep">${exRep1} x</div>
                                        <div class="result__grid__item kg">${exWeight2} kg</div>
                                        <div class="result__grid__item rep">${exRep2} x</div>
                                        <div class="result__grid__item kg">${exWeight3} kg</div>
                                        <div class="result__grid__item rep">${exRep3} x</div>
                                        <div class="result__grid__item kg">${exWeight4} kg</div>
                                        <div class="result__grid__item rep">${exRep4} x</div>
                                    </div>
                         </div>
                            `

                    let dataContainer = document.querySelector('.train__data__container').children[0];



                    if (dataContainer === undefined) {
                        document.querySelector('.train__data__container').insertAdjacentHTML('afterbegin', exerciseFull);
                        return;
                    }

                    if (dataContainer) {
                        let id = dataContainer.getAttribute('id');
                        if (id === exeDate) {
                            document.querySelector('.exercise__date__new').insertAdjacentHTML('afterend', exercise);
                        } else {
                            document.querySelector('.train__data__container').insertAdjacentHTML('afterbegin', exerciseFull);
                        }
                    }
                }
            })
        }
    }
})();

/********************************* */
// MAIN CONTROLLER
/********************************** */
let controler = (function (dataCTRL, uiCTRL, lsCTRL) {

    // add input to data controler, localStorage and DOM
    function addItem(e) {
        e.preventDefault();
        // array with all existing dates in training array objects
        let dates = dataCTRL.trainingDates();

        // input data from UI controller
        let input = uiCTRL.getInputData();


        // return existing exercise data IDs
        let exIDs = dataCTRL.returnExerciseIDs();


        // created new exercise ID
        let inputID = uiCTRL.createID(exIDs);

        // storing input data with construcotr function in data array training
        dataCTRL.addDataToTraining(
            input.exerciseDay, inputID, input.exerciseDate, input.exerciseName,
            input.exWeight1, input.exRep1,
            input.exWeight2, input.exRep2,
            input.exWeight3, input.exRep3,
            input.exWeight4, input.exRep4);

        // storing this data to localStorage
        lsCTRL.storeToLS(input);

        // add training to dom
        uiCTRL.exerciseToDom(input, inputID, dates);
    }

    // get data from localStorage to DOM on page reload
    function dataOnLoad() {
        lsCTRL.dataFromLsOnLoad();
    }



    // all event listener function
    let eventListeners = function () {
        let sumbitbtn = document.getElementById('form__submit');
        sumbitbtn.addEventListener('click', addItem);

        document.addEventListener('DOMContentLoaded', dataOnLoad);
    }

    return {
        init: function () {
            eventListeners();
        }
    }
})(dataControler, UIcontroler, LScontroler);

controler.init();










