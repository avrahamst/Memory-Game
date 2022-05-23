let list = [
  {
    img: "https://images.unsplash.com/photo-1617739680046-7abaefc6a5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    id: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1645563836146-3c450234d7cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1620588280212-bf1d2b23b112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1638900799921-62161989095a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    id: 3,
  },
  {
    img: "https://aio.tydlo.com/img/large/7259_422897.jpg",
    id: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1618083632939-fa519424bca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    id: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1611273232445-65dcab5856d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    id: 6,
  },
  {
    img: "https://images.unsplash.com/photo-1612311221084-4ccf01196ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    id: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1616878457476-4a95b0b28e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    id: 8,
  },
  {
    img: "https://images.unsplash.com/photo-1617994736853-b0c9c3e6a1c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    id: 9,
  },
  {
    img: "https://images.unsplash.com/photo-1620588280287-ebb81815191e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    id: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1638900744578-dff3ff030b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    id: 11,
  },
];
let playrs = [{ name: "avi", score_now: 0, score: 0 }];
let oo = 1;
let isWin = false;
let dobelList = [];
let arr = [];
let num = 4,
  sumPlayers = 1;
(sum = 0), (c = 0), (w = 0), (ind = 0);
let numPlayers = document.getElementById("numPlayers");
let board = document.getElementById("card");
let head = document.getElementById("head");
let but = document.querySelector("#but");
let nu = document.querySelector("#numb");
let scor = document.getElementById("results");
const winer = document.getElementById("winer");
const namePlayer = document.getElementById("namePlayer");
nu.onchange = () => {
  oo = 1;
};
but.onclick = (event) => {
  // winer.innerHTML = "";
  if (playrs.some((v) => v.name === "")) {
    alert("Enter all the names or start over with fewer players");
  } else {
    playrsPrent();
    playrs.forEach((v) => {
      v.score_now = 0;
    });
    c = 0;
    event.preventDefault();
    num = Number(nu.value);

    dobelList = [];
    for (j = 0; j < 2; j++) {
      for (i = 0; i < num / 2; i++) {
        dobelList.push(list[i]);
      }
    }
    dobelList = dobelList.sort(() => Math.random() - 0.5);
    let flag = 1,
      flag2,
      ferst;
    function createCrd(v, i) {
      const cardEl = document.createElement("img");

      cardEl.src = "g1.jpg";
      cardEl.className = "dele";
      cardEl.id = "car";
      cardEl.height = "120";
      cardEl.width = "120";
      cardEl.onclick = function () {
        if (arr.length <= 1) {
          cardEl.src = v.img;

          arr.push(v.id);
          if (flag2 == i) {
            // debugger;
            flag = 1;
            arr.pop();
            isWin = false;
          }
          if (flag) {
            ferst = cardEl;
            flag = 0;
            flag2 = i;
            console.log("bbb");
            if (c >= playrs.length) {
              c = 0;
            }
          } else if (arr[0] != arr[1]) {
            setTimeout(() => {
              ferst.src = "g1.jpg";
              cardEl.src = "g1.jpg";
              flag = 1;
              isWin;
              arr = [];
              c++;
            }, 450);
          } else {
            sum++;
            ferst.onclick = () => {};
            cardEl.onclick = () => {};
            isWin = true;
            playrs[c].score_now = playrs[c].score_now + 1;

            console.log("win");
            setTimeout(() => {
              flag = 1;
            }, 250);
            arr = [];
          }
          playrsPrent();
        }
        if (sum == num / 2) {
          let max = 0;
          playrs.forEach((v, i) => {
            if (max < v.score_now) {
              nax = v.score_now;
              ind = i;
            }
          });
          playrs[ind].score += 1;
          winerPrent(playrs[ind]);
          playrsPrent();
          setTimeout(() => {
            aa();
          }, 250);
        }
      };
      return cardEl;
    }
    if (sum == 0 && oo) {
      dobelList.forEach((v, i) => {
        // winer.innerHTML = playrs[i].name;
        let elment = createCrd(v, i);
        board.appendChild(elment);
        oo = 0;
      });
    }
  }
};

function aa() {
  dobelList.forEach(() => {
    document.getElementById("car").remove();
  });
  sum = 0;
}

let playrsPrent = () => {
  const sco = document.createElement("div");
  scor.innerHTML = "";
  playrs.forEach((v, i) => {
    const sco = document.createElement("div");
    sco.innerHTML =
      v.name +
      ":<br/> score now: " +
      v.score_now +
      " Overall score: " +
      v.score;
    scor.appendChild(sco);
  });
};
function winerPrent(wine) {
  oo = 1;
  let lment = document.createElement("div");
  winer.innerHTML = "";
  lment.className = "ww";
  lment.innerHTML = wine.name + " he is the winner " + wine.score + " times";
  let elment = lment;
  winer.appendChild(elment);
  // setTimeout(() => {
  //   winer.innerHTML = "";
  // }, 550);
}

const but1 = document.getElementById("but1");
numPlayers.onchange = (e) => {
  sumPlayers = Number(e.target.value);

  for (let i = 0; i < sumPlayers; i++) {
    playrs[i] = { name, score_now: 0, score: 0 };
    let inputName = document.createElement("input");
    inputName.placeholder = "player " + (i + 1);
    inputName.onchange = (e) => {
      playrs[i] = { name: e.target.value, score_now: 0, score: 0 };
    };
    let elment = inputName;
    namePlayer.appendChild(elment);
  }
};

but1.onclick = () => {};
