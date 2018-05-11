//---------------default parameters

function pow(num1:number=4,num2:number=2):number{
  return num1**num2;
}

document.write(pow(4,5) + "<br>");

document.write(pow(3)+ "<br>");

document.write(pow()+ "<br>");

document.write(pow(undefined,8)+ "<br>");


//------------------optional parameters

function sub(num1?:number,num2?:number):void{
    document.write(num1+" "+num2+ "<br>");
}

sub(7);
sub();
