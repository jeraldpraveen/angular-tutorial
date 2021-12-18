var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.draw = function () {
            console.log("Draw with x=".concat(_this.x, " and y=").concat(_this.y));
        };
    }
    return Point;
}());
var point = new Point();
point.x = 5;
point.y = 10;
point.draw();
