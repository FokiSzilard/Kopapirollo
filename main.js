let userPoint = 0;
let computerPoint = 0;

let gyoztek=0;
let Nev

function adatMentes(){
    let playerName = document.forms["adatok"]["playerName"].value 
    if (nevEllenorzes(playerName) == true){
        document.getElementById("hibaUzenet").innerHTML = ""
        Nev = playerName
    }
    else{
        document.getElementById("hibaUzenet").innerHTML = "Nem elég hosszú a név"
        return
    }

    let playerEmail = document.forms["adatok"]["email"].value
    if (emailEllenorzes(playerEmail) == false){
        document.getElementById("hibaUzenet").innerHTML += "helytelen email formátum"
        return
    }
}

function nevEllenorzes(nev){
    if (nev.length > 7 & nev.length < 21){
        return true
    }
    else{
        return false
    }
}

function emailEllenorzes(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)

}


function jatek(userChoice){
    if(userPoint == 10 || computerPoint == 10){
        gyoztek=1
    }
    if (gyoztek==1){
        document.getElementById('ujrakezdes').classList.remove('nemlatszik')
        return
    }
    if (Nev == null || Nev == ""){
        document.getElementById("jatekHiba").innerHTML = "előbb töltsd ki az ürlapot"
        return
    }
    document.getElementById("jatekHiba").innerHTML = ""
    let choice = ["ko","papir","ollo"]
    let random = Math.floor(Math.random()*3)
    
    let computerChoice = choice[random]

    for (let i = 0; i < choice.length; i++){
        document.getElementById(`${choice[i]}`).classList.remove('kivalasztott')
    }
    document.getElementById(`${userChoice}`).className += 'kivalasztott'
    document.getElementById('vegeredmeny').innerHTML = ""



    document.getElementById("gepkep").src = `img/${computerChoice}.png`

    if (userChoice == computerChoice)
        {
            //dontetlen
            console.log("dontetlen"+ computerChoice)
            document.getElementById('vegeredmeny').innerHTML = "Eredmény Döntetlen"
        }
    else if((userChoice == "ko" & computerChoice == "papir")
        || (userChoice == "papir" & computerChoice == "ollo")
        || (userChoice == "ollo" & computerChoice == "ko")
        )
        {
            //gep gyoz
            computerPoint++;
            console.log("vesztes"+ computerChoice)
            document.getElementById('vegeredmeny').innerHTML = "Eredmény Vesztettél"
            document.getElementById('computerPoints').innerHTML = computerPoint
        }
    else if((userChoice == "papir" & computerChoice == "ko")
        || (userChoice=="ollo" & computerChoice == "papir")
        || (userChoice=="ko" & computerChoice == "ollo")
    )
        {
            userPoint++;
            console.log("gyoztes"+ computerChoice)
            document.getElementById('vegeredmeny').innerHTML = "Eredmény Győztél!"
            document.getElementById('playerPoints').innerHTML = userPoint
        }
}

function ujrakezdes(){
    document.getElementById('ujrakezdes').className += 'nemlatszik'
    userPoint = 0
    document.getElementById('playerPoints').innerHTML = userPoint
    computerPoint = 0
    document.getElementById('computerPoints').innerHTML = computerPoint
    gyoztek = 0
    document.getElementById("gepkep").src = ""
}