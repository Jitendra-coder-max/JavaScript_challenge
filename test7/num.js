
// function myFunc(a,b){

//   return a==100 || b== 100 || a+b == 100

  
// }
// const myFunc = (a,b) => a==100|| b==100 || (a+b) == 100


// console.log(myFunc(50,50))

// const myStr = (str) =>  str.length>=3 ? str.slice(0,3)+ str.slice(-3) : str

const myStr = (str) => {

   if(str.length>=3){

      return str.slice(0,3)+str.slice(-3)
   }

   else{
      return str
   }
}




console.log(myStr("AB"))