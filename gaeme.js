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
    img: "https://images.unsplash.com/photo-1616878457476-4a95b0b28e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
let dobelList = [];
let arr = [];
let flag1 = 0;
let num = 4,
  sum = 0;
let board = document.getElementById("card");
let head = document.getElementById("head");
let but = document.querySelector("#but");

let nu = document.querySelector("#numb");
// nu.onchange = () => {};
but.onclick = (event) => {
  if (flag1) {
    dele.remove();
    let card = document.getElementsByClassName("dele");
  }
  flag1++;
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
    cardEl.height = "220";
    cardEl.width = "220";
    cardEl.onclick = function () {
      if (arr.length <= 1) {
        cardEl.src = v.img;
        cardEl.id = v.id;
        arr.push(v.id);
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
            ferst.src = "g1.jpg";
            cardEl.src = "g1.jpg";
            flag = 1;
            arr = [];
          }, 450);
        } else {
          sum++;
          ferst.onclick = () => {};
          cardEl.onclick = () => {};
          console.log("win");
          setTimeout(() => {
            flag = 1;
          }, 250);
          arr = [];
        }
        if (sum == num / 2) {
        }
      }
    };
    return cardEl;
  }

  dobelList.forEach((v, i) => {
    let elment = createCrd(v, i);
    board.appendChild(elment);
  });
};
