

// document.getElementById("demo").innerHTML = "yext"

function  Person(first,last,age) {
this.firstname = first;
 this.lastname= last;
 this.age = age

}


const People = new Person("Jit","Nish",24);

document.getElementById("demo").innerHTML= People.age + ''+ People.firstname; +''+ People.lastname ;