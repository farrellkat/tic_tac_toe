let turn = 1
let winner = false
let game = 1
let xArray = []
let oArray = []


let winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]


const winCheck = (player, playerArray) => winningCombos.forEach((combo) => {
    if (playerArray.includes(combo[0]) && playerArray.includes(combo[1]) && playerArray.includes(combo[2])) {
        winner = true
        alert(`${player} Wins!`)
    }
})

if (game === 10 && winner === false) {
    alert("It's a tie")
}

let buttonClicked = (id) => {
    document.getElementById(id).addEventListener("click", function () {
        if (turn === 1) {
            button = document.getElementById(id)
            button.innerHTML = "X"
            turn++
            game++
            button.disabled = true
            xArray.push(parseInt(id))
            winCheck("X", xArray)
            if (game === 10 && winner === false) {
                alert("It's a tie")
            }
        } else {
            if (turn === 2) {
                button = document.getElementById(id)
                button.innerHTML = "O"
                button.className += " blue"
                turn--
                game++
                button.disabled = true
                oArray.push(parseInt(id))
                winCheck("O", oArray)
                if (game === 10 && winner === false) {
                    alert("It's a tie")
                }
            }
        }
    });
}

for (var i = 1; i < 10; i++) {
    buttonClicked(i)
}
