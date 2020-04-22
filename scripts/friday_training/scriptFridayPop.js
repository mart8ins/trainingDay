
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
                // exerciseimg: document.querySelector('.exercise__img').value

            }
        },
        // create ID for current Input data
        createID: function () {
            return Math.floor(Math.random() * 1000);
        },

        exerciseToDom: function (obj, objID) {
            let exerciseDay, exercise, curImg, training__data__container, childArrIDS, current__training__day;


            // setting image url to current exercise
            switch (obj.exerciseName) {
                case 'Arms barbell':
                    curImg = 'armsbarbell';
                    break;
                case 'Chest cable pull down':
                    curImg = 'chest_cable_down';
                    break;
                case 'Chest cable pull up':
                    curImg = 'chest_cable_up';
                    break;
                case 'Deadlift':
                    curImg = 'deadlift';
                    break;
                case 'Overhead press':
                    curImg = 'overhead';
                    break;
                case 'Shoulder pull back':
                    curImg = 'shoulder_back';
                    break;
                case 'Triceps cable row behind head':
                    curImg = 'triceps_row_behind';
                    break;
            }

            exerciseDay = `
            <div class="exercise__date__container" id=${obj.exerciseDate}>
                <div class="exercise__date__new" >
                    <div class=exercise__date__value>${obj.exerciseDate}</div>
                    <div class="exercise__date__remove">X</div>
                </div>
                <div class="all__exercises">
                    <div class="exercise__new" id=${objID}>
                    <div class="title__remove__container">
                        <div class="exercise__title__data">${obj.exerciseName}</div>
                        <div class="exercise__remove">X</div>
                    </div>
                    <div class="exercise__img" style="background-image: url(../image/friday/${curImg}.jpg)"></div>
                    <div class="exercise__progres">
                        <div class="result__grid__item">Weight</div>
                        <div class="result__grid__item">Repetitions</div>
                        <div class="result__grid__item kg">${obj.exerciseWeight} kg</div>
                        <div class="result__grid__item rep">${obj.exerciseRepetitions} x</div>
                        <div class="result__grid__item kg"> kg</div>
                        <div class="result__grid__item rep"></div>
                        <div class="result__grid__item kg"> kg</div>
                        <div class="result__grid__item rep"></div>
                        <div class="result__grid__item kg"> kg</div>
                        <div class="result__grid__item rep"></div>
                    </div>
                    </div>
                </div>
        </div>
            `

            exercise = `
                <div class="exercise__new" id=${objID}>
                    <div class="title__remove__container">
                        <div class="exercise__title__data">${obj.exerciseName}</div>
                        <div class="exercise__remove">X</div>
                    </div>
                    <div class="exercise__img" style="background-image: url(../image/friday/${curImg}.jpg)"></div>
                    <div class="exercise__progres">
                        <div class="result__grid__item">Weight</div>
                        <div class="result__grid__item">Repetitions</div>
                        <div class="result__grid__item kg">${obj.exerciseWeight} kg</div>
                        <div class="result__grid__item rep">${obj.exerciseRepetitions}</div>
                        <div class="result__grid__item kg">30 kg</div>
                        <div class="result__grid__item rep">8</div>
                        <div class="result__grid__item kg">40 kg</div>
                        <div class="result__grid__item rep">6</div>
                        <div class="result__grid__item kg">50 kg</div>
                        <div class="result__grid__item rep">4</div>
                    </div>
                    </div>
            `

            if (obj.exerciseDate) {
                // visas treniņdienas
                training__data__container = document.querySelector('.train__data_container').children;
                childArrIDS = [];
                // loops lai nostorotu iekš array visu esošo treniņdienu id
                for (let i of training__data__container) {
                    childArrIDS.push(i.getAttribute('id'));
                }
                childArrIDS.forEach(function (id) {
                    if (obj.exerciseDate === id) {
                        current__training__day = document.getElementById(id).children[0];
                        console.log(current__training__day)
                        // let bb = current__training__day.children[0].nextElementSibling;
                        // console.log(bb)
                        current__training__day.insertAdjacentHTML('beforeend', exercise);
                    }
                })
            }



        }
    }
})();

// document.querySelector('.all__exercises').insertAdjacentHTML('afterbegin', exercise);
// document.querySelector('.train__data_container').insertAdjacentHTML('beforeend', exerciseDay);

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

        // add training to dom
        uiCTRL.exerciseToDom(input, inputID);
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










