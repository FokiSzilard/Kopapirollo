let userPoint = 0;
let computerPoint = 0;

function jatek(userChoice){
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