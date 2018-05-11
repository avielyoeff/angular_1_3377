class A{
  
   num:number;

    func(){
      console.log(this.num)
    }
}


class B extends A{
  constructor(){
    super();
  }
}

interface I{
   num1:number;
   num2?:number;  // ? is optional to implement
   func(num:number):void;
}


class C implements I{
  num1:number;
  func(num:number):void{

  }
}
