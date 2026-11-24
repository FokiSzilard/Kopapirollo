document.getElementById('ujrakezdes').style.visibility = 'hidden' 
document.getElementById('mainform').style.display = 'block' 

let userPoint = 0;
let computerPoint = 0;

let gyoztek=0;
let Nev

function adatMentes(){
    let playerName = document.forms["adatok"]["playerName"].value 
    let hiba = nevEllenorzes(playerName)
    if (hiba != ""){
        document.getElementById("hibaUzenet").innerHTML = hiba
        return
    }
    else{
        document.getElementById("hibaUzenet").innerHTML = "" 
    }
    

    let playerEmail = document.forms["adatok"]["email"].value
    if (emailEllenorzes(playerEmail) == false){
        document.getElementById("hibaUzenet").innerHTML += "helytelen email formátum"
        return
    }
    document.getElementById('mainform').style.display = 'none' 
}

function nevEllenorzes(nev){
    const pattern = /^[a-zA-Z]+$/
    try {
        if(nev.length < 7) throw "Túl rövid a név"
        if(nev.length > 21) throw "Túl hosszú a név"
        if(!pattern.test(nev)) throw "Ne tartalmazzon számot"
        return ""
    } catch (error) {
        return error;   
    }


}

function emailEllenorzes(email){
    try {
        if(!email.includes('@')) throw "tartalmaznia kell @ karaktert"
        
    } catch (error) {
        
    }

}


function jatek(userChoice){
    if(userPoint == 10 || computerPoint == 10){
        gyoztek=1
        if (userPoint == 10){
            document.getElementById('vegeredmeny').innerHTML = `Végeredmény: ${Nev} győzött`
        }
        else{
            document.getElementById('vegeredmeny').innerHTML = `Végeredmény: gép győzött`
        }
    }
    if (gyoztek==1){
    document.getElementById('ujrakezdes').style.visibility = 'visible' 
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
            document.getElementById('vegeredmeny').innerHTML = "Döntetlen"
        }
    else if((userChoice == "ko" & computerChoice == "papir")
        || (userChoice == "papir" & computerChoice == "ollo")
        || (userChoice == "ollo" & computerChoice == "ko")
        )
        {
            //gep gyoz
            computerPoint++;
            console.log("vesztes"+ computerChoice)
            document.getElementById('vegeredmeny').innerHTML = `${Nev} Vesztett` 
            document.getElementById('computerPoints').innerHTML = computerPoint
        }
    else if((userChoice == "papir" & computerChoice == "ko")
        || (userChoice=="ollo" & computerChoice == "papir")
        || (userChoice=="ko" & computerChoice == "ollo")
    )
        {
            userPoint++;
            console.log("gyoztes"+ computerChoice)
            document.getElementById('vegeredmeny').innerHTML = `${Nev} Győzött` 
            document.getElementById('playerPoints').innerHTML = userPoint
        }
}

function ujrakezdes(){
    document.getElementById('ujrakezdes').style.visibility = 'hidden' 
    userPoint = 0
    document.getElementById('playerPoints').innerHTML = userPoint
    computerPoint = 0
    document.getElementById('computerPoints').innerHTML = computerPoint
    gyoztek = 0
    document.getElementById("gepkep").src = ""
}