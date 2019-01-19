let turn = 1
let box = document.querySelectorAll(".button__box")

let buttonClicked = (id) => {
    document.getElementById(id).addEventListener("click", function () {
        if (turn === 1) {
            button = document.getElementById(id)
            button.innerHTML = "X";
            turn++
            button.disabled=true
        } else {
            if (turn === 2) {
                button = document.getElementById(id)
                button.innerHTML = "O";
                turn--
                button.disabled=true
            }
        }
    });
}

for (var i = 1; i < 10; i++) {
    buttonClicked(i)
}
