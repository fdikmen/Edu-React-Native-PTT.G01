// Spread Operators ...

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2]; // [1,2,3,4,5,6]

let obj1 = {name: 'John', age: 25};
let obj2 = {city: 'London',age:30};

let obj3 = {...obj1, ...obj2}; // {name: 'John', age: 30, city: 'London'}

let obj = {name: 'John', age: 25};
let objCopy = {...obj}; // {name: 'John', age: 25}


function sum(a, b, c) {
    return a + b + c;
}

let arr = [1,2,3];

sum(...arr)

let styleObj={color:'red',fontSize:'20px',fontWeight:'bold'};

let styleObj2={...styleObj,backgroundColor:'yellow'};


//IF ELSE
if(condition){
    //do something
}else{
    //do something else
}

//Ternary Operator
condition ? doSomething : doSomethingElse

codition && doSomething