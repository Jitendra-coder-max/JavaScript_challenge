
function anaGram(a,b){

let x = a.toLowerCase()
let y = b.toLowerCase()

x = x.split('').sort().join('');
y = y.split('').sort().join('');

return x === y

}
console.log(anaGram("army","mary"))