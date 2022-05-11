let cards = ["A", "B", "C", "D", "A", "B", "C", "D"];

function shuffle(cards) {
  cards = cards.sort(() => Math.random() - 0.5);
}
shuffle(cards);

const board = document.getElementById("board");

function createCrd() {
  for (i in cards) {
    const element = document.createElement("div");

    element.classList.add("card", i);
    element.onclick=function{

        
    }

    // element.addEventListener("click", click(i, element));
    board.appendChild(element);
  }
}
// createCrd();
// function click() {
//   element.innerHTML = 1;
//   console.log("dgf");
// }
