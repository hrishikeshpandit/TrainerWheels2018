let doLog= ()=>console.log("hello");
interface Point{
    x:number,
    y:number

}  
let drawPoint=(point:Point)=>{
        console.log("hello");
    }

drawPoint({
    x:3,
    y:33
})
doLog();

class Distance{
    x:number;
    y:number;
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
    calculate(){
console.log("X: "+this.x+" Y: "+this.y);

    }
    secondDistance(another:Distance){

    }
}
let dist1=new Distance(44,33);
//dist1.x=55;
//dist1.y=213;
dist1.calculate();
