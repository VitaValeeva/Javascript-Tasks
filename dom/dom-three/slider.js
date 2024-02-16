const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction == "right") {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
};

right.addEventListener("click", e => {
  loop("right", e);
});

left.addEventListener("click", e => {
  loop("left", e);
});
  


// const leftBtn = document.querySelector("#left");
// const rightBtn = document.querySelector("#right");
// const itemsList = document.querySelector("#items");

// right.addEventListener("click", e => {
//   e.preventDefault();

//   itemsList.appendChild(itemsList.firstElementChild); 
// })

// left.addEventListener("click", e => {
//   e.preventDefault();
//   itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
// })

