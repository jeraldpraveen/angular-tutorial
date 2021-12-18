var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.draw = function () {
            console.log("Draw with x=".concat(_this.x, " and y=").concat(_this.y));
        };
    }
    return Point4;
}());
var point4 = new Point4(6, 7);
point4.draw();
console.log(point4.x);
// Cannot access Y variable
// point4.y;
