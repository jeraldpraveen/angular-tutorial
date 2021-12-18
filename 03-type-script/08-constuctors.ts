class Point1 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw = () => {
    console.log(`Draw with x=${this.x} and y=${this.y}`);
  };
}

let point1 = new Point1(9, 10);
point1.draw();
