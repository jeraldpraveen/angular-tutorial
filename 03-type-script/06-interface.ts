interface Point {
  x: number;
  y: number;
}

let drawWithInterface = (point: Point) => {
  console.log(point.x, point.y);
};

drawWithInterface({
  x: 1,
  y: 2,
});
