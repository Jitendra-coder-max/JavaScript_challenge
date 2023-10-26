// promise


// fetch('http://api.github.com/users/octocat')
// .then((response) => {
//     return response.json()
// }).then((data) =>{
//     console.log(data)
// }).catch((errors) =>{
//     console.log(errors)
// })

// async function getUser(){
//     const resposne = await fetch('http://api.github.com/users/octocat')
// const     data =      await   resposne.json()

// console.log(data)
// console.log("Hii")
// }


// getUser()




// async function getUser(){


//            const response =  await fetch('http://api.github.com/users/octocat');
//            const data = await                    response.json()

//            console.log(data)
// }




// getUser()


Promise.all([promise1,promise2,promise3]).then((value)  => {
    console.log(values)
})