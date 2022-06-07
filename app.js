const wrapper = document.querySelector(".wrapper");

let hexCode = "#";

const arr = [
  "1",
  "a",
  "2",
  "b",
  "3",
  "c",
  "4",
  "d",
  "5",
  "e",
  "6",
  "f",
  "7",
  "8",
  "9",
];

function populate(count) {
  for (let i = 0; i < count; i++) {
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * arr.length);
      hexCode += arr[randomNumber];
    }
    html = `<div class="box" style="background-color: ${hexCode}">
  <p class="color-code">${hexCode}</p>
    </div>`;
    console.log(hexCode);
    wrapper.insertAdjacentHTML("beforeend", html);
    hexCode = "#";
  }
}

let count = Number(prompt("enter how many color boxes you want"));

populate(count);
