function randomFunction(){
    var obj1 ={ name:"Jit",age:24}

    return function(){
        console.log(obj1.name + " is"+  " Awesome")
    }
}

   var initialClouser = randomFunction();

initialClouser()


