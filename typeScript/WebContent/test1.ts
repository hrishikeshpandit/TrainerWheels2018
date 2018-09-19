function doSomething(){
for (var i=0;i<6;i++){
    console.log(i);
}
console.log("finally"+i);
let a:number;
let b:boolean;
let c:string;
let d:any;
c="hgdydiuui";
d=323;
a=223;
b=true;
console.log(c);
console.log(a);
console.log(b);
console.log(d);
d="21dcsdgsudgv";
console.log(d);
let e:number[]=[23456,34567,94,799];
console.log(e);
let f:any[]=[2,"ttye",'y6t6',34567,94,799];
console.log(f);
const colorRed=12;
const colorGreen=324;
enum Color {Red,Green,Blue};
let bgcolor=Color.Red;
console.log(bgcolor);
let message="abc";
let  endsWithC=(<string>message).endsWith('c');
let  alt=(message as string).endsWith('c');
console.log(endsWithC);
console.log(alt );
}
doSomething();