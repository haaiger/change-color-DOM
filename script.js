let cards = document.querySelector(".cards");
let allCards = document.querySelectorAll(".card");
console.log(cards);
console.log(allCards);

for (let index = 0; index < 4; index++) {
  let newBox = document.createElement("div");
  newBox.setAttribute("class", "card");
  newBox.innerText = `This is card ${allCards.length + 1}`;
  cards.appendChild(newBox);
  allCards = document.querySelectorAll(".card");
}

for (let index = 0; index < allCards.length; index++) {
  allCards[index].style.cssText = `
        position: relative;
        background-color: rgb(${random()}, ${random()}, ${random()})
    `;

  let innerDiv = document.createElement("div");
  innerDiv.innerText = getNum(allCards[index]);
  innerDiv.style.cssText = `
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    color: white;

    text-align: center;
    vertical-align: middle;
    line-height: 50px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
  allCards[index].appendChild(innerDiv);
}

function getNum(element) {
  let text = element.innerText.trim();
  return text[text.length - 1];
}

function random() {
  return Math.floor(Math.random() * 255);
}

cards.addEventListener("click", (event) => {
  event.preventDefault();

  for (let index = 0; index < allCards.length; index++) {
    if (event.target === allCards[index]) {
      allCards[index].style.cssText = `
            position: relative;
            background-color: rgb(${random()}, ${random()}, ${random()})
        `;
    }
  }
});

let button = document.createElement("button");
button.innerText = "Change all colors";
button.style.color = "red";
button.style.backgroundColor = "white";
cards.appendChild(button);

button.addEventListener("click", (event) => {
  event.preventDefault();
  for (let index = 0; index < allCards.length; index++) {
    allCards[index].style.cssText = `
              position: relative;
              background-color: rgb(${random()}, ${random()}, ${random()})
          `;

    let innerDiv = document.createElement("div");
    innerDiv.innerText = getNum(allCards[index]);
    innerDiv.style.cssText = `
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: red;
          color: white;
      
          text-align: center;
          vertical-align: middle;
          line-height: 50px;
      
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
      
      `;
    allCards[index].appendChild(innerDiv);
  }
});
