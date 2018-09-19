function doSomething() {
    for (var i = 0; i < 6; i++) {
        console.log(i);
    }
    console.log("finally" + i);
    var a;
    var b;
    var c;
    var d;
    c = "hgdydiuui";
    d = 323;
    a = 223;
    b = true;
    console.log(c);
    console.log(a);
    console.log(b);
    console.log(d);
    d = "21dcsdgsudgv";
    console.log(d);
    var e = [23456, 34567, 94, 799];
    console.log(e);
    var f = [2, "ttye", 'y6t6', 34567, 94, 799];
    console.log(f);
    var colorRed = 12;
    var colorGreen = 324;
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var bgcolor = Color.Red;
    console.log(bgcolor);
    var message = "abc";
    var endsWithC = message.endsWith('c');
    var alt = message.endsWith('c');
    console.log(endsWithC);
    console.log(alt);
}
doSomething();
