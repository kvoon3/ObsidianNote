```ts
class Person{
    public name: string;
    public age: number;
    public constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    show():void{
        console.log(this.name,this.age);
    }
}

class Student extends Person{
    public gender:"male"|"female";
    public constructor(name:string,age:number,gender:"male"|"female"){
        super(name,age);
        this.gender = gender;
    }
}

let s1:Student = new Student("kwon",12,"male");

console.log(s1);
```