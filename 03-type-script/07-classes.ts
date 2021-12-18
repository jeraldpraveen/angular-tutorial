class Point {
  x: number;
  y: number;

  draw = () => {
    console.log(`Draw with x=${this.x} and y=${this.y}`);
  };
}

let point = new Point();
point.x = 5;
point.y = 10;
point.draw();
