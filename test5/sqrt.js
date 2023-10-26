// // let num = 5;

// // // let num1 = Math.sqrt(2)

// // let num1 = Math.random()

// // console.log(num1)

// let arr = [1,2,3, 7,8];
// let uni = [];
// for(let i=1; i<=arr.length ; i++){

//     uni.push(i)
// }

// console.log(uni)


// let arr = [2,34,5]

// let newArr = arr.reduce((acc,cur) => acc>cur ? acc :cur)

// console.log(newArr)
// let number = 153
// let sum = 0;

// let temp = number;

// while(temp>0){
//     let r = temp%10;

//     // sum = sum+ r**3;or r*r**r

//     // sum = sum +r**(Number of digit)

//     temp = parseInt(temp/10);
// }


// if(sum == number){
//     console.log(number+" Armstrong number")
// }

// else{
//     console.log(number + "Not armstrog number")
// }

let result;

// let operator = prompt('Enter operator  * - + /')

const operator = prompt('Enter operator ( either +, -, * or / ): ');

let n1 = parseFloat(prompt("Enter 1st no"))
let n2 = parseFloat(prompt("Enter 1st no"))

switch(operator){

    case '-':
        result = n1-n2;
        console.log(` ${n1} -  ${n2} = ${result}`);
        break;
    case '+':
            result = n1+n2;
            console.log(` ${n1} +  ${n2} = ${result}`);
            break     ;
   case '*':
                result = n1*n2;
                console.log(` ${n1} * ${n2} = ${result}`);
                break  ;
                
    case '/':
                    result = n1/n2;
                    console.log(` ${n1} +/ ${n2} = ${result}`);
                    break   
    default :
        
    
            console.log("Invalid Operator")
            break;
}