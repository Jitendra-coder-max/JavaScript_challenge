// function sumFunc(num) {
//   if (num > 0) {
//     return num + sumFunc(num - 1);
//   }
//    else {
//     return num;
//   }
// }

// console.log(sumFunc(5));


// let a = "Hello  Jit";
// let str = '';
//  for(let i = 0; i<a.length; i++){
//      if(a.charAt(i) == a.charAt(i).toUpperCase())
//      {
//             str = str+a.charAt(i).toLowerCase()
//      }
//      else{
//          str = str+ a.charAt(i).toUpperCase()
//      }

//  }

//  console.log(str)

//   console.log(a.replace('H','M'))


// let str = "javaguys"

//   let newStr =         str.charAt(0).toUpperCase()+ str.slice(1);

//   console.log(newStr)


// let Person = {
//     Name: "Jit",
//     Age: 25,
//     Bike: "Honda"
// }



// // delete Person.Name;
// delete Person['Name'];
// console.log(Person)


// let str = "malyalam"

// let n = str.length
// for(let i = 0; i<str.length; i++){
// if(str.charAt(i) === str.charAt(n-1))

// {

// console.log(true);
// break

// }

// else
// {
//     console.log(false)
// }

// }



let str = "UGAUTAMY";

if(str.startsWith('G') && str.endsWith('M') )
{
    console.log("START WITH G END WITH M")

}

else if (str.startsWith('G')) {
    console.log("Starts with G but not end with M")
}

else  if(str.endsWith('M')) {
    console.log("eND WITH  M but nOT START WIRTHY G")
}


else {

    console.log("dO NOPT START WITH G AND END WITH M")
}