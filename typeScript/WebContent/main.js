var doLog = function () { return console.log("hello"); };
var drawPoint = function (point) {
    console.log("hello");
};
drawPoint({
    x: 3,
    y: 33
});
doLog();
var Distance = /** @class */ (function () {
    function Distance(x, y) {
        this.x = x;
        this.y = y;
    }
    Distance.prototype.calculate = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Distance.prototype.secondDistance = function (another) {
    };
    return Distance;
}());
var dist1 = new Distance(44, 33);
//dist1.x=55;
//dist1.y=213;
dist1.calculate();
