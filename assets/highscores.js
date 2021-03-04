var highscoreName = document.getElementById('highscoreName');
var highscoreScore = document.getElementById('highscoreScore');

var arrayA = []
var arrayB = []

function displayScores() {
    var grabScores = localStorage.getItem('Scores');
    var grabNames = localStorage.getItem('Name');
    var listName = document.createElement('li')
    var listScore = document.createElement('li')
    arrayA.push(grabNames)
    arrayB.push(grabScores)
    listName.textContent = arrayA
    listScore.textContent = arrayB
    highscoreName.append(listName)
    highscoreScore.append(listScore)
}
displayScores();