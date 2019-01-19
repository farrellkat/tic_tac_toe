let turn = 1

let buttonClicked = (id) => {
    document.getElementById(id).addEventListener("click", function () {
        if (turn === 1) {
            document.getElementById(id).innerHTML = "X";
            turn++
        } else {
            if (turn === 2) {
                document.getElementById(id).innerHTML = "O";
                turn++
            } else {
                if (turn === 3) {
                    document.getElementById(id).innerHTML = "";
                    turn = 1
                }
            }
        }
    });
}

for (var i = 1; i < 10; i++) {
    buttonClicked(i)
}





// for (buttonBox of buttonBoxes) {
//     buttonBox.addEventListener(
//         "click",
//         (event) => {

// }



// if buttonBox count === 0 don't display anything
// onClick if buttonBox count === count 1 and display an x
// onClick if buttonBox count === 1 bump count 1 and display an o
// onClick if buttonBox count === 2, set count === 0



// console.log(buttonBox)