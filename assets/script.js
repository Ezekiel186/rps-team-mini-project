// console.log("test")
var player
var choose
var win=0
var lose=0
var tie=0

function rps() {
    // console.log("rpstest")
    player = prompt("Rock, Paper, Scissor");
    console.log(player);
    computerRps()
    compare()
} 

function computerRps() {
    var response = [ "r", "p", "s"]
    choose = response[Math.floor(Math.random() * 3)]
    console.log(choose);
}

// computerRps()

function compare() {
    if (player === choose) {
        alert("the computer chose " + choose)
        alert("tie");
        tie++
    } else if (player === "r") {
        if (choose === "p") {
            alert("the computer chose " + choose)
            alert("lose")
            lose++
        } else if (choose === "s") {
            alert("the computer chose " + choose)
            alert("win")
            win++
        }
    }  else if (player === "p") {
        if (choose === "s") {
            alert("the computer chose " + choose)
            alert("lose")
            lose++
        } else if (choose === "r") {
            alert("the computer chose " + choose)
            alert("win")
            win++
        }
    }  else if (player === "s") {
        if (choose === "r") {
            alert("the computer chose " + choose)
            alert("lose")
            lose++
        } else if (choose === "p") {
            alert("the computer chose " + choose)
            alert("win")
            win++
        }
    } 
    alert("Wins: " + win + "\nLoses: " + lose + "\nTies: " + tie)
}
