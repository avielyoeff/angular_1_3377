
let f1=(str:string)=>{console.log("f1 " +str)};

let f2=(num:number)=>{console.log("f2 "+num)};

let f3=num=>{console.log("f3 "+num)};


let f4:(x:number)=>number;
f4=num=>num**num;


function func(param:(x:number)=>void):void{
    param(4);
}


func(f2);
