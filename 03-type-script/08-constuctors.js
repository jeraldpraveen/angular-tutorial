var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        var _this = this;
        this.draw = function () {
            console.log("Draw with x=".concat(_this.x, " and y=").concat(_this.y));
        };
        this.x = x;
        this.y = y;
    }
    return Point1;
}());
var point1 = new Point1(9, 10);
point1.draw();
