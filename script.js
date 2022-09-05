let board = document.getElementById("board");
const reset = document.getElementById("reset");
let color = document.getElementById("scolor");
let res = document.getElementById("res");
let set = document.getElementById("boardconfig");
let pixels = document.querySelectorAll(".pixel");
let pixelcolor = "blue";
let pixelsQuantity = 256;

//render function
function render(pixelsQuantity) {
  board = document.getElementById("board");
  if (board.hasChildNodes()) {
    for (let node of board.childNodes) {
      node.remove();
    }
  }
  board.style.gridTemplateColumns = ` repeat(${Math.floor(
    Math.sqrt(pixelsQuantity)
  )},1fr)`;
  for (let i = 0; i < pixelsQuantity; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    board.appendChild(pixel);
  }
  pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (ele) => {
      pixel.style.backgroundColor = pixelcolor;
    });
  });
}
render(pixelsQuantity);
//form submit listener
set.onsubmit = (e) => {
  e.preventDefault();
  pixelcolor = e.target.color.value;
  if (e.target.pnum.value > 256) {
    pixelsQuantity = 256;
    render(pixelsQuantity);
    console.log(board.childNodes.length);
  } else {
    pixelsQuantity = e.target.pnum.value;
    render(pixelsQuantity);
  }
};
color.onchange = (e) => {
  pixelcolor = e.target.value;
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (ele) => {
      pixel.style.backgroundColor = pixelcolor;
    });
  });
};

//pixel listener

//reset button listener
reset.addEventListener("click", () => {
  pixels.forEach((pixel) => (pixel.style.backgroundColor = "white"));
  pixelsQuantity = 256;
  render(pixelsQuantity);
});
