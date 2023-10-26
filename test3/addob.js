 let ob1 = {name:"jIT", age : "Prem"};
let ob2 = {name:"Guddu", address : "1567 House no"}

// let ob3 = Object.assign({},ob1,ob2);

let ob3 = {...ob1,...ob2}
console.log(ob3)