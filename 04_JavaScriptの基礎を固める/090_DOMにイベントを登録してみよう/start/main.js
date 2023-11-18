const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

function changeColor() {
  h1.style.color = "red";
  console.log(this);
};

function changeBackgroundColor() {
  h1.style.backgroundColor = "green";
  console.log(this);
};

// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBackgroundColor);
// btn.onclick = changeColor
// btn.onclick = changeBackgroundColor
