let resultat = 0;
let chaine = "";
let resultat_temp = 0;
const chiffres = document.querySelectorAll('.chiffre');
const signes = document.querySelectorAll('.signe');
const boutton_c = document.getElementById('c');
const boutton_egal = document.getElementById('=');


chiffres.forEach(function (button, index) {
    button.addEventListener('click', addNumber);
})

signes.forEach(function (button, index) {
    button.addEventListener('click', addSigne);
})

boutton_c.addEventListener('click', C);
boutton_egal.addEventListener('click', compute);
  
function addNumber(event) {
    if (chaine == "Calculette" || chaine == "Err"){
        chaine = "";
    }
    if (parseInt(chaine) == resultat_temp ){
        if (!(chaine[chaine.length-1] == "+" || chaine[chaine.length-1] == "-" || chaine[chaine.length-1] == "*" || chaine[chaine.length-1] == "/") ){
            chaine = "";
            document.getElementById("texte_calculatrice").innerHTML = chaine;
        }
    }
    resultat_temp = 0;
    let val = event.target.innerHTML;
    chaine += val;
    document.getElementById("texte_calculatrice").innerHTML = chaine;

}

function addSigne(event){
    if (chaine == "Calculette" || chaine == "Err"){
        chaine = "";
    }
    let val = event.target.innerHTML;
    
    if (chaine[chaine.length - 1] == "+" || chaine[chaine.length - 1] == "-" || chaine[chaine.length - 1] == "*" || chaine[chaine.length - 1] == "/"){
        chaine = chaine.slice(0, -1);
        chaine += val;
        document.getElementById("texte_calculatrice").innerHTML = chaine;
        return;
    }
    chaine += val;
    document.getElementById("texte_calculatrice").innerHTML = chaine;
}

function C() {
    chaine = "Calculette";
    document.getElementById("texte_calculatrice").innerHTML = chaine;
}

function compute() {
    if ( chaine == "Calculette" || chaine == "Err"){
        return;
    }
    if (chaine[chaine.length - 1] == "+" || chaine[chaine.length - 1] == "-" || chaine[chaine.length - 1] == "*" || chaine[chaine.length - 1] == "/"){
        chaine = "Err";
        document.getElementById("texte_calculatrice").innerHTML = chaine;
        return;
    }
    if (chaine[0] == "+" || chaine[0] == "-" || chaine[0] == "*" || chaine[0] == "/"){
        chaine = "Err";
        document.getElementById("texte_calculatrice").innerHTML = chaine;
        return;
    }
    let resultat = 0;
    let len_val = 0;
    let vals=[];
    let tab_signe = [];
    let valeur = "" ;
    for (let i = 0; i < chaine.length; i++){
        if (isNaN(parseInt(chaine[i]))){
            tab_signe.push(chaine[i]);
        }
        else{
            let u = i;
            if (u == 0 || isNaN(parseInt(chaine[u-1]))){
                while (!isNaN(chaine[u])){
                    let apush2 = chaine[u].toString();
                    valeur += apush2;
                    u = u + 1;                   
                }
                let apush3 = parseInt(valeur);
                vals.push(apush3);
                valeur = "";
            }                       
        }       
    }

    resultat = vals[0];
    for (let k = 1;k <= vals.length -1 ;k++){
        if (tab_signe[k-1] == "+"){
            resultat += vals[k];
            
        }
        if (tab_signe[k-1] == "-"){
            resultat -= vals[k];
        }
        if (tab_signe[k-1] == "*"){
            resultat *= vals[k];
        }
        if (tab_signe[k-1] == "/"){
            resultat /= vals[k];
        }
    }
    vals=[];
    if (isNaN(resultat) || ! isFinite(resultat)){
        chaine = "Err";
        document.getElementById("texte_calculatrice").innerHTML = chaine;
        return;
    }
    chaine = resultat;
    resultat_temp = resultat;
    document.getElementById("texte_calculatrice").innerHTML = chaine;
}

