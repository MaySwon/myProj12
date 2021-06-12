// Тип данных




// let myNumber = 100;


// let myVar:any;
// myVar=10;
// // myVar=true;

// let myVar:number|string;

// myVar=10;
// myVar='str';

// let numberArr:number[]=[];
// numberArr.push(10);

// // Функции

// function myFunction(p1:number,p2?:string):boolean{
//     return true;
// }

// myFunction(10,'some');

// myFunction(10);

// Обобщения

// function getId<T>(id:T):T{
//     return id ;

// }

// let res = getId(10);
// let res1 = getId('key');


// Классы

// class Person{
//     name:string;
//     surname:string;
//     private id: number;
//     constructor(name:string,surname:string,id:number){
//         this.name=name;
//         this.surname=surname;
//         this.id=id;
//     }
// }


// let user = new Person('Ivan','Ivanov',1);


// Интерфейсы

// interface MyUser{
//     name:string;
//     id:number;
//     status?:boolean;
// }

// let user:MyUser;

// user={
//     name:'Ivan',
//     id:2
// }



// Перечисления

enum Status{
    admin=10,
    moderator,
    user
}
 
