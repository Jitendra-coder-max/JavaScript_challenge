
let arr = [1,2,3,4,,5,5,7,85,4,6,4,32,];



let max = arr.reduce((acc,cur) => acc>cur ? acc : cur);

let sec = arr.reduce((acc,cur) =>   max>cur && cur>acc ? cur : acc )


console.log(max)
console.log(sec)