//  let promise = new Promise((resolve,reject) =>{
//      resolve("promise resoved ststus")
//  })

//  promise.then((response) => {
//     console.log(response)
//  })


let promise = new Promise((resolve,reject) =>{
    resolve("promise resoved ststus")
})

promise.then((firstResponse) => {
   return firstResponse + ' And chaining'
})
.then((secondResponse) => {
    console.log(secondResponse)
})