let score = 0;
let nbQuestions = 5;
let nbQuestion = 0;
let correction = 1;
let lcorrection = [1,2,2,1,2];
let propositions = [["Jean 3:16","Luc 13:25","Jean 14:14","Philippiens 4:13","Genèse 2:1"],["Mathieu 24:7","Psaumes 23:1","Jean 10:30","1 Corinthiens 13:10","Genèse 1:1"]];
let verse = ["Car Dieu a tant aimé le monde qu'il a donné son fils unique Jésus-Christ afin que quiconque ne périsse point mais qu'il ait la vie éternelle","L'Eternel est mon berger : je ne manquerai de rien","Mon père et moi nous sommes un","Je puis tout par celui qui me fortifie","Au commencement, Dieu créa le ciel et la terre"];
const submit = document.getElementById('sbmt');
submit.addEventListener('click', verifier);

function setQuestion(nbQuestion){
    if (nbQuestion >= nbQuestions){
        nbQuestion = 0;
        nbQuestions = 5;
        document.getElementById("qstn").innerHTML = 'Questionnaire terminé, appuyez sur "vérifier" pour consulter votre score'
        document.getElementById("choice1").style.display = 'none';
        document.getElementById("choice2").style.display = 'none';
        document.getElementById("choix1").style.display = 'none';
        document.getElementById("choix2").style.display = 'none';
        correction = lcorrection[nbQuestion];
        console.log("feur")
        document.getElementById("sbmt").innerHTML = "Vérifier"
        return;
    }
    document.getElementById("qstn").innerHTML = verse[nbQuestion];
    document.getElementById("choice1").innerHTML = propositions[0][nbQuestion];
    document.getElementById("choice2").innerHTML = propositions[1][nbQuestion];
    correction = lcorrection[nbQuestion];
}
function verifier(){
    if (document.getElementById("sbmt").innerHTML == "Vérifier"){
        if (score == 5){
            document.getElementById("qstn").innerHTML = "Bravo, votre score est de 5/5. Comme vous avez eu des réponses correctes à chacunes de mes questions, il vous est désormais possible de me contacter ici :";
            document.getElementById("sbmt").innerHTML = "Contacter";
            return;
        }
        else{
            document.getElementById("qstn").innerHTML = "Votre score est de : " + score + "/5. Retentez votre chance !"
            document.getElementById("sbmt").innerHTML = "Réessayer";
            return;
        }
    }
    if (document.getElementById("sbmt").innerHTML == "Contacter"){
        var mailtoLink = "mailto:exemple@domaine.com?subject=Questionnaire%20Réussit";
        window.location.href = mailtoLink;
        location.reload();
        return;
    }
    if (document.getElementById("sbmt").innerHTML == "Réessayer"){
        location.reload();
        return;
    }
    const reponseQ1 = document.querySelector('input[id="choix1"]:checked');
    console.log(reponseQ1)
    if (reponseQ1){
        if (lcorrection[nbQuestion] == 1){
            score = score + 1;
        }
    }
    else {
        if (lcorrection[nbQuestion] == 2) {
            score = score + 1;
        }
    }
    nbQuestion = nbQuestion + 1;
    setQuestion(nbQuestion);
}