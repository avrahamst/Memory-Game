let cards = ["A", "B", "C", "D", "A", "B", "C", "D"];

function shuffle(cards) {
  cards = cards.sort(() => Math.random() - 0.5);
}
shuffle(cards);
let sum = 0;

const board = document.getElementById("board");

for (i in cards) {
  const element = createCrd(i);
  board.appendChild(element);
}
let arr = [];
let flag = 1;
let flag2;
let ferst;

function createCrd(i) {
  const cardEl = document.createElement("div");
  cardEl.onclick = function () {
    cardEl.innerHTML = cards[i];
    arr.push(cards[i]);

    if (flag2 == i) {
      flag = 1;
      arr.pop();
    }

    if (flag) {
      ferst = cardEl;
      flag = 0;
      flag2 = i;
    } else if (arr[0] != arr[1]) {
      setTimeout(() => {
        ferst.innerHTML = "";
        cardEl.innerHTML = "";
        flag = 1;
      }, 500);
      arr = [];
    } else {
      sum++;
      console.log("win");
      setTimeout(() => {
        flag = 1;
        ferst.className = "new";
        ferst.innerHTML = "";
        cardEl.className = "new";
        cardEl.innerHTML = "";
      }, 250);
      arr = [];
    }
    if (sum == cards.length / 2) {
      console.log("dffgh");

      board.className = "win";
    }
  };

  cardEl.id = i;
  cardEl.className = "card";
  return cardEl;
}
