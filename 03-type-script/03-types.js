function test() {
    var a;
    a = 1;
    a = "a";
    a = true;
    console.log(a);
    var test;
    test = 1;
    test = "a";
    test = true;
    console.log(test);
}
function test1() {
    var a = 1000;
    var b = true;
    var c = "test12345";
    var d = 585852;
    var e = [1, 2, 3];
    var f = [1, true, "a"];
    console.log(a, b, c, d, e, f);
    // Case To Use ENUM
    var ColorRed = 0;
    var ColorGreen = 1;
    var ColorYellow = 2;
    console.log(ColorGreen);
    // ENUM
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Yellow"] = 4] = "Yellow";
    })(Color || (Color = {}));
    console.log(Color.Red);
    console.log(Color.Yellow);
}
test();
test1();
