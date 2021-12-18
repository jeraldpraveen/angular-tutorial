// We can also pass strings to drawPoint() --> No error....
// To Avoid such scenarios, we use inline anotations
var drawPoint = function (point) {
    console.log(point.x, point.y);
};
drawPoint({
    x: 1,
    y: 2
});
// drawPoint({
//   name: "jerald",
// });
