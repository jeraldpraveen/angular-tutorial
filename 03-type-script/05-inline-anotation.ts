// We can also pass strings to drawPoint() --> No error....
// To Avoid such scenarios, we use inline anotations
let drawPoint = (point: { x: number; y: number }) => {
  console.log(point.x, point.y);
};

drawPoint({
  x: 1,
  y: 2,
});

// drawPoint({
//   name: "jerald",
// });
