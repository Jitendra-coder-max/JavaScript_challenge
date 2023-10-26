// // const people = [
// //     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
// //     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
// //     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
// //     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
// //     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
// //     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
// //     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
// //     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
// //     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
// //     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
// //     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
// //     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// // ];


// // // What is the average income of all the people in the array?


// // // let totalSalary =   people.reduce((acc,person)=>  acc+ parseInt(person.salary),0)/people.length

// // // console.log(totalSalary)

// // // 2) Who are the people that are currently older than 30?

// // //  let older = people.filter((person) => new Date().getFullYear() - new Date(person.DOB).getFullYear()>30)

// // //  console.log(older)

// // // Get a list of the people's full name (firstName and lastName).


// // //  let myfullName = people.map((val) =>   ({ ...val , fullName: `${val.firstName}  ${val.lastName} ` }))

// // //   console.log(myfullName)
  

// // // const peopleWithFullName = people.map((val) => ({
// // //     ...val,
// // //     fullName: `${val.firstName} ${val.lastName}`,
// // //   }));
  
// // //   console.log(peopleWithFullName)

// // // Get a list of people in the array ordered from youngest to oldest.


// // // let People1 = people.sort((PersonA,PersonB) => new Date(PersonA.DOB) - new Date(PersonB.DOB))

// // // console.log(people)
// // // console.log(People1)


// // // How many people are there in each department?

// // // let People1 = people.reduce((acc, person) => ({...acc, [person.department]:  acc[person.department]+1 || 1 }), {} )

// // // console.log(People1)

// // // let arr = [1,2,3,4]

// // //   sum = 0 ;

// // //   for(let i = 0; i<arr.length ; i++){

// // //         sum = sum + arr[i]
// // //   }

// // //   arr.push(sum)
// // // console.log(arr)

// // // let arr = [1,2,3,4,5];
// // // let obj = {...arr}

// // // console.log(obj)



// // // const arr = [3,4,5,6]

// // // arr.foo = "Hi"
// // // for(let i in arr){
// // //   console.log(i)
// // // }

// // //  for(let i of arr){
// // //   console.log(i)
// // //  }

 
// // //  arr.foo = "Hi"



// // // let arr = [1,2,56,76,90,34,75,1,2,5,76]

// // // let count = 0;
// // // for(let i =0; i<arr.length; i++){
// // //      for(let j = i+1; j<arr.length; j++){
          
// // //         if(arr[i] === arr[j]){
// // //             count = count +1
// // //           // console.log(count)
// // //         }
       
// // //       }
// // // }

// // // console.log(count)


// // // let arr = [1,2,3,4,6,2,3,4]

// // //  let newArr =  arr.slice(0,-1) 
// // // //  slice(index,inedex-1)

// // //   console.log(newArr)


// // // let arr = [1,2,4,5,78,93,45,67,78];


// // // function getRandomNumber(max = 100) {
// // //   return Math.floor(Math.random() * max)
// // // }
// // // const INITIAL_LIST = Array.from({ length: 5 }, () => getRandomNumber())

// // // console.log(INITIAL_LIST)

// // // const getRandomNumber = (max= 100) => {
// // //    return Math.floor(Math.random()*max)
// // // }
// // //   const Initial_Num = Array.from({length:5}, () => getRandomNumber())
// // // console.log(Initial_Num)


// // let arr = [12,34,56,78,98,76,54,33]
 
// // // index = 3

// // let newArr =   arr.slice(1) 
// // //    let newArr =   arr.slice(0 ,3)

// //    console.log(newArr)



// // const INITIAL_SCORES = [
// //     { id: 1001, score: 250 },
// //     { id: 1002, score: 100 },
// //     { id: 1003, score: 300 },
// //   ]


// //   let newArr = INITIAL_SCORES.map((Initial) =>    Initial.score) 

// //   let obj = { id: 1004, score: 301 }

// //   let updatedArray = {...INITIAL_SCORES,obj}


// //   console.log(newArr)
// //   console.log(updatedArray)


// // const numbers = [1, 2, 6, 3, 4, 2, 5]

// //  let myNum =  numbers.splice( 2,1)

// //  console.log(myNum)
// //  console.log(numbers)



// const employees = [
//     {
//       id: 1,
//       first_name: "Jonas",
//       last_name: "Baudasso",
//       email: "jbaudasso0@paypal.com",
//       gender: "Male",
//       department: "Support",
//     },
//     {
//       id: 2,
//       first_name: "Delcina",
//       last_name: "Baldelli",
//       email: "dbaldelli1@istockphoto.com",
//       gender: "Female",
//       department: "Engineering",
//     },
//     {
//       id: 3,
//       first_name: "Charlotta",
//       last_name: "Sodor",
//       email: "csodor2@businessinsider.com",
//       gender: "Female",
//       department: "Human Resources",
//     },
//     {
//       id: 4,
//       first_name: "Scarface",
//       last_name: "Sandercock",
//       email: "ssandercock3@ovh.net",
//       gender: "Male",
//       department: "Support",
//     },
//     {
//       id: 5,
//       first_name: "Rob",
//       last_name: "Beurich",
//       email: "rbeurich4@comsenz.com",
//       gender: "Male",
//       department: "Engineering",
//     },
//   ]

  
// //  let emp =  employees.find((employee) => employee.first_name ==="Jonas")
// // let emp =  employees.findIndex((employee) => employee.id===4)
// // let emp =  employees.find((employee) => employee.id===4)

// //  console.log(emp.last_name)
// // swap a and b
// // let arr = [1, 2, 3, 4, 5, 'a','b',6];

// //                    let index1 = arr.indexOf('a')
// //                    let index2 = arr.indexOf('b')

// //                    if( index1 !== -1   && index2 !== -1){
// //                     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
// //                    }

// // console.log(arr); 




// // let arr = [20,5,1,4,80,70,555,76,43]
// // let temp;

// // for(let i = 0; i<arr.length; i++){
// //    for(let j =i; j<arr.length; j++){
// //     if(arr[i]>arr[j]){
// //       temp = arr[i]; //20
// //       arr[i] = arr[j];//5
// //       arr[j] = temp //20
// //     }
// //    }
// // }

// // console.log(arr)

// // function length(s) {
// //   let arr =	s.split('')
// //   let count = 0
// //   for(let i = 0; i<arr.length; i++){
// //  count++
// //   }
// //   return count;
  
// //   }
  
// //   console.log(length("Hello World"))




// // const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
// // let n = arr.flat(3)
// // console.log(arr)
// // console.log(n)

// let arr = [5,6,7,4,3,5,6,'b','a',3,4,5,6,6]
    
//     if(arr.includes('a') && arr.includes('b')){

//       arr['a','b'] = arr['b','a']
//     }

//     console.log(arr)

