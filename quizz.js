var fenetre, score;
score = 0;

function fenetre(x) {
    if (x == "Bonne réponse"){
        document.getElementById("T").innerHTML = "Bonne réponse";
        score=score+2;
    } else {
        document.getElementById("T").innerHTML = "Mauvaise réponse";
        score=score-1;
    }
}

function Reponse(x) {
    if (x == "Bonne réponse"){
        document.getElementById("Q").innerHTML = "Bonne réponse";
        score=score+2;
    } else {
        document.getElementById("Q").innerHTML = "Mauvaise réponse";
        score=score-1;
    }
}

function Rep(x) {
    if (x == "Bonne réponse"){
        document.getElementById("A").innerHTML = "Bonne réponse";
        score=score+2;
    } else {
        document.getElementById("A").innerHTML = "Mauvaise réponse";
        score=score-1;
    }
}
function rep_(x) {
    if (x == "Bonne réponse"){
        document.getElementById("P").innerHTML = "Bonne réponse";
        score=score+2;
    } else {
        document.getElementById("P").innerHTML = "Mauvaise réponse";
        score=score-1;
    }
}

function Score(x){
    if (score<0){
    score=0;
    }
    if (score>6){
        score=6
    }
    document.getElementById("S").innerHTML = "Vous avez " + score + " points";
}