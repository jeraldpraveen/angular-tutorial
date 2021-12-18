var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.draw = function () {
            console.log("Draw with x=".concat(_this.x, " and y=").concat(_this.y));
        };
    }
    Object.defineProperty(Point5.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value NOT less than 0");
            }
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point5;
}());
var point5 = new Point5(11, 12);
point5.draw();
console.log(point5.Y);
point5.Y = 11;
console.log(point5.Y);
