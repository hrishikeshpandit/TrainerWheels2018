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
    function Distance() {
    }
    Distance.prototype.calculate = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Distance.prototype.secondDistance = function (another) {
    };
    return Distance;
}());
var dist1;
dist1.calculate();
