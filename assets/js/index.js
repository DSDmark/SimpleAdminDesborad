const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const CH = (canvas.height = 500);
const CW = (canvas.width = 500);
canvas.style.background = "black";

const RandomWalker = {
  borderStyle: { size: 1, color: "white", style: "solid" },
  color: "white",
  draw() {
    canvas.style.border = `${this.borderStyle.size}px ${this.borderStyle.style} ${this.borderStyle.color}`;
  },
  createVector(magnitude = 1,direction = {x:1,y:1}){
    if(!(this.vector)) console.log("h"); this.vector = {magnitude,direction};
console.log(this.vector)
    ctx.restore();
  ctx.clearRect(0, 0, CH, CW);
    ctx.save();
    ctx.translate(CW / 2, CH / 2);
    
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    
    ctx.moveTo(0,0);
    ctx.lineTo(this.vector.magnitude*this.vector.direction.x,this.vector.magnitude*this.vector.direction.y);
    
    ctx.lineWidth = this.size;
    ctx.closePath();
    ctx.stroke();
  },
  multVector(value=1){
     this.vector.magnitude *= value;
  },
  update() {
    
    this.createVector();
    console.log(
      'ang'
    )
    this.multVector(20);

    // let conditon = Math.floor(Math.random() * 3);
    // // console.log(conditon)

    // switch (conditon) {
    //   case 0:
    //     this.vector.x = -this.vector.x;
    //     break;
    //   case 1:
    //     this.vector.y = -this.vector.y;
    //     break;
    // }
    // console.log(this.vector.x, this.vector.y);
  },
};

function render() {
  RandomWalker.draw();
  RandomWalker.update();
}
render();

// function gameLoop() {
//   render();
//   window.requestAnimationFrame(gameLoop);
// }
// window.requestAnimationFrame(gameLoop)

setInterval(() => {
  render();
}, 1000);

