var questionArray = [
    {
        question: "What was the name of Daenerys Targaryen's largest dragon?",
        choices: ["Drogon", "Viseryion", "Rhaegal", "Aerys"],
        answer: "Drogon"
    },
    {
        question: "Which of these were the last to join the seven kingdoms",
        choices: ["Dorne", "Lannisport", "The North", "The Eyrie"],
        answer:"Dorne"
    },
    {
        question: "What was Daenerys's husband's name?",
        choices: ["Khal Drogo", "Jon Snow", "Tormund", "Jaime Lannister"],
        answer:"Khal Drogo"
    },
    {
        question: "Who killed Tywin Lannister?",
        choices: ["Tyrion Lannister", "Elia Martell", "Jon Snow", "Olenna Tyrell"],
        answer:"Tyrion Lannister"
    },
    {
        question: "What was the name of the 'greatest city that ever was or ever will be'?",
        choices: ["Qarth", "Essos", "Braavis", "Volantis"],
        answer:"Qarth"
    },
]
var qSection = document.getElementById('qSection');
var aSection = document.getElementById('aSection');
var aSection2 = document.getElementById('aSection2');
var aSection3 = document.getElementById('aSection3');
var aSection4 = document.getElementById('aSection4');
var aSection5 = document.getElementById('aSection5');
var rSection = document.getElementById('rSection');
var mainContent = document.querySelector('.mainContent');
var startBtn = document.getElementById('startBtn');
var titleName = document.querySelector('.titleName');
var timeNoti = document.getElementById('timeNoti');
var keepTrack = document.getElementById('keepTrack');


    


function startGame() {
    mainContent.remove();
    startBtn.remove();
    titleName.remove();
    var timeLeft = 45;
    var time = setInterval(function() {
        if (timeLeft > 0) {
            timeNoti.textContent = timeLeft
            timeLeft--;
        } else {
            clearInterval(time)
            qSection.remove();
            keepTrack.textContent = "You scored a " + timeLeft + " Please enter your name below"
            localStorage.setItem("Scores", timeLeft)
            var submitName = document.createElement('input')
            var saveBtn = document.createElement('button')
            saveBtn.textContent = ('Save')
            saveBtn.addEventListener('click', function(event){
            localStorage.setItem("Name", submitName.value)
            location.href = "./highscores.html"
                                    })
            keepTrack.append(submitName, saveBtn)
        }
    },
        1000);
        // Question 1
    questionHead = document.createElement('h1')
    questionHead.className = "questionHead"
    questionHead.textContent = questionArray[0].question
    qSection.append(questionHead);
    
    
    for (let i = 0; i < 4; i++){
    const answerList = document.createElement('button')
    answerList.innerText= i;
    answerList.textContent = questionArray[0].choices[i]
    aSection.append(answerList); 
    answerList.addEventListener('click', function(event) {
        if (this.textContent !== questionArray[0].answer) {
            timeLeft = timeLeft - 10
            rSection.textContent = "Incorrect 😔"
        } else {
    timeLeft = timeLeft + 5
    aSection.remove();
    rSection.textContent = "Correct! 😎"
    questionHead.remove();
    // Question 2
    questionHead = document.createElement('h1')
    questionHead.className = "questionHead"
    questionHead.textContent = questionArray[1].question
    qSection.append(questionHead);
    
    for (let i = 0; i < 4; i++){
    const answerList = document.createElement('button')
    answerList.innerText= i;
    answerList.textContent = questionArray[1].choices[i]
    aSection2.append(answerList); 
    answerList.addEventListener('click', function(event) {
        if (this.textContent !== questionArray[1].answer) {
            timeLeft = timeLeft - 10
            rSection.textContent = "Incorrect 😔"
        } else {
            timeLeft = timeLeft + 5
            aSection2.remove();
            rSection.textContent = "Correct! 😎"
            questionHead.remove();
            // Question 3
            questionHead = document.createElement('h1')
            questionHead.className = "questionHead"
            questionHead.textContent = questionArray[2].question
            qSection.append(questionHead);
            
            
            for (let i = 0; i < 4; i++){
            const answerList = document.createElement('button')
            answerList.innerText= i;
            answerList.textContent = questionArray[2].choices[i]
            aSection3.append(answerList); 
            answerList.addEventListener('click', function(event) {
                if (this.textContent !== questionArray[2].answer) {
                    timeLeft = timeLeft - 10
                    rSection.textContent = "Incorrect 😔"
                } else {
                    timeLeft = timeLeft + 5
                    aSection3.remove();
                    rSection.textContent = "Correct! 😎"
                    questionHead.remove();
                    // Question 4
                    questionHead = document.createElement('h1')
                    questionHead.className = "questionHead"
                    questionHead.textContent = questionArray[3].question
                    qSection.append(questionHead);
                    
                    for (let i = 0; i < 4; i++){
                    const answerList = document.createElement('button')
                    answerList.innerText= i;
                    answerList.textContent = questionArray[3].choices[i]
                    aSection4.append(answerList); 
                    answerList.addEventListener('click', function(event) {
                        if (this.textContent !== questionArray[3].answer) {
                            timeLeft = timeLeft - 10
                            rSection.textContent = "Incorrect 😔"
                        } else {
                            timeLeft = timeLeft + 5
                            aSection4.remove();
                            rSection.textContent = "Correct! 😎"
                            questionHead.remove();
                            // Question 5
                            questionHead = document.createElement('h1')
                            questionHead.className = "questionHead"
                            questionHead.textContent = questionArray[4].question
                            qSection.append(questionHead);

                            for (let i = 0; i < 4; i++){
                            const answerList = document.createElement('button')
                            answerList.innerText= i;
                            answerList.textContent = questionArray[4].choices[i]
                            aSection5.append(answerList); 
                            answerList.addEventListener('click', function(event) {
                                if (this.textContent !== questionArray[4].answer) {
                                    timeLeft = timeLeft - 10
                                    rSection.textContent = "Incorrect 😔"
                                } else {
                                    timeLeft = timeLeft + 5
                                    clearInterval(time)
                                    qSection.remove();
                                    keepTrack.textContent = "You scored a " + timeLeft + " Please enter your name below"
                                    localStorage.setItem("Scores", timeLeft)
                                    var submitName = document.createElement('input')
                                    var saveBtn = document.createElement('button')
                                    saveBtn.textContent = ('Save')
                                    saveBtn.addEventListener('click', function(event){
                                        localStorage.setItem("Name", submitName.value)
                                        location.href = "./highscores.html"
                                    })
                                    keepTrack.append(submitName, saveBtn)
                                    

                                }
                            })   
                        }
                            
                        }
                    })   
                }
                    
                }
            })   
        }
        }
    })   
}
        }
    })   
}

    
       
}


startBtn.addEventListener('click', function (event) {
    startGame();
});
console.log(questionArray[1].answer);