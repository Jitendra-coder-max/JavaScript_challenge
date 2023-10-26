// // let ob = {
// //     name: "Jitendra",
// //     age: 5,
// //     val: 56,
// //     pin: 456,
// // }


// // // Object.seal(ob)
// // Object.freeze(ob)

// // ob.name = "Aryan"
// // ob.country = "India"

// // console.log(ob)

// // // let user =  Object.assign({},ob);

// // // let user = {...ob}
// // // // let user = ob;

// // // user.name = "Guddu"
// // // user.age = 25

// // // console.log(ob)
// // // console.log(user)







// // // let obj = {
// // //     name: 'peter',
// // //     address: {
// // //         city: 'Noida',
// // //         state: 'UP'
// // //     }
// // // }


// // // let user =  JSON.parse(JSON.stringify(obj))  /*Deep copy */


// // // user.address.city = "Delhi"

// // // console.log(obj)





// let Person ={

//     fname: "Jitendra",
//     lname: "Nishad",
//     fullname: function(){
//         return this.fname + " " + this.lname
//     }
// }


//   let Fullname =   Person.fullname()

//   console.log(Fullname)



let ob = {

    a : 100,
    b : 200,
    name: "Jitendra"

}


console.log(ob.hasOwnProperty('a'))