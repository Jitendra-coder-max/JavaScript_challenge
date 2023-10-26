// let Person = {
//     name:"Ram",
//     age: 33
// }

//  let hasKey =  'name' in Person

//  if(hasKey){
//     console.log("Key exists")
//  }

//  else {
//     console.log("Not exist")
//  }

// // console.log(Person.hasOwnProperty('age'))


// let Person = {
//          name:"Ram",
//          age: 33
//     }
//     let Person3 = {
//         Address:"Ram ji 1998",
//         age: 33
//    }


// //    let   Person2 =  Person

//  let Person2 = Object.assign({}, Person3, Person)
   
//    console.log(Person2.age)
//    console.log(Person2)

// let Person = {

//     name : "Jit",
//     lname : "Nishad",
//     age: 56,
//     college: "UIT"
// }


// // Person.year = 1998
// Person['yEAR'] = 1998

// console.log(Person)

//    let NewP =       Object.keys(Person).length
//    console.log(NewP)

// let count = 0;

// for(let key in Person){

//     count++
// }

// console.log("tOTAL pROPERTY" +' ' + count)

// for(let key in Person){
//     let value ;

//     val = Person[key];
//     console.log(key +'-' + val)
// }

// let num = 12433.567787;

// let val = '$'+ num.toFixed(2)
// console.log(val)


// let str = "Hello my name is jittu"

// if(str.startsWith("He")){
//     console.log(true)
// }

// else{
//     console.log(false)
// }


// let str = "      Hello my      i "


// let result = str.trim();
// console.log(result)
// console.log(str)

// let Person = {

//         name : "Jit",
//         lname : "Nishad",
//         age: 56,
//         college: "UIT"
//     }

//     let res1 = String(Person)

//     console.log(res1)
//     console.log(res1.name)
//     console.log(typeof res1)
    
    // let result = JSON.stringify(Person)


    // console.log(Person)

    

    // console.log(result)

    // console.log(typeof result)

    let str = "HEllo bUDIES AR YOU GOOD"

        //    let res = str.includes('AR')

        if(str.indexOf('AR') !== -1){

            console.log("INCLIDE")
        }
    else {
console.log("Not include")
    }
        //    console.log(res)