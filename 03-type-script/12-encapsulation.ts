class Point5 {
  constructor(public x?: number, private y?: number) {}

  draw = () => {
    console.log(`Draw with x=${this.x} and y=${this.y}`);
  };

  get Y() {
    return this.y;
  }

  set Y(value) {
    if (value < 0) {
      throw new Error("value NOT less than 0");
    }
    this.y = value;
  }
}

let point5 = new Point5(11, 12);
point5.draw();
console.log(point5.Y);
point5.Y = 11;
console.log(point5.Y);
