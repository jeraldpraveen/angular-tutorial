class Point4 {
  constructor(public x?: number, private y?: number) {}

  draw = () => {
    console.log(`Draw with x=${this.x} and y=${this.y}`);
  };
}

let point4 = new Point4(6, 7);
point4.draw();
console.log(point4.x);
// Cannot access Y variable
// point4.y;
