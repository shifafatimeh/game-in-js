let main = document.querySelectorAll(".button");
let buff = document.querySelector(".reset");
let msg_con = document.querySelector(".msg-container");
let raw_1 = document.querySelector("#raw");
let new_b = document.querySelector("#newb");

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let chance_O = true;
count = 0;
let drawgame = () => {
  raw_1.innerText = "GAME IS DRAW , TRY AGAIN";
  msg_con.classList.remove("hide");
  enabfunc();
};
let reseat = () => {
  chance_O = true;
  enabfunc();
  msg_con.classList.add("hide");
  buff.classList.remove("hid");
};
buff.classList.remove("hid");
main.forEach((element) => {
  element.addEventListener("click", () => {
    if (chance_O) {
      console.log("had clicked");
      element.innerText = "O";
      chance_O = false;
    } else {
      console.log("had clicked");
      element.innerText = "X";
      chance_O = true;
    }
    element.disabled = true;
    count++;
    let che = checkwin();
    if (count === 9 && !che) {
      drawgame();
    }
  });
});
let showwinner = (winner) => {
  raw_1.innerText = `CONGRATULATIONS THE WINNER IS "${winner}"`;

  msg_con.classList.remove("hide");
  disabfunc();
};

let checkwin = () => {
  for (let indi of win) {
    let pos1 = main[indi[0]].innerText;
    let pos2 = main[indi[1]].innerText;
    let pos3 = main[indi[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner");
        buff.classList.add("hid");
        showwinner(pos1);
      }
    }
  }
};
let disabfunc = () => {
  for (let mbox of main) {
    mbox.disabled = true;
  }
};
let enabfunc = () => {
  for (let mbox of main) {
    mbox.disabled = false;
    mbox.innerText = "";
    count = 0;
  }
};
buff.addEventListener("click", reseat);
new_b.addEventListener("click", reseat);
