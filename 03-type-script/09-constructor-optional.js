var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        var _this = this;
        this.draw = function () {
            console.log("Draw with x=".concat(_this.x, " and y=").concat(_this.y));
        };
        this.x = x;
        this.y = y;
    }
    return Point2;
}());
var point2 = new Point2();
point2.draw();
