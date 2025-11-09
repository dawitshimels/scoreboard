let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let homePoint=0
let awayPoint=0

function plusOneHome(){
    homePoint += 1
    homeScore.innerText = homePoint
}

function plusTwoHome(){
    homePoint += 2
    homeScore.innerText = homePoint
}

function plusThreeHome(){
    homePoint += 3
    homeScore.innerText = homePoint
}

function plusOneAway(){
    awayPoint += 1
    awayScore.innerText = awayPoint
}

function plusTwoAway(){
    awayPoint += 2
    awayScore.innerText = awayPoint
}

function plusThreeAway(){
    awayPoint += 3
    awayScore.innerText = awayPoint
}