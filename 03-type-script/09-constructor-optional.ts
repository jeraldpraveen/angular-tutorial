class Point2 {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw = () => {
    console.log(`Draw with x=${this.x} and y=${this.y}`);
  };
}

let point2 = new Point2();
point2.draw();
