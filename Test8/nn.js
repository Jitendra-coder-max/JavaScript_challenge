// console.log("Hii")

const datas = [
  { name: "Jit", profession: "Software eng" },
  { name: "Roshan", profession: "Software Engineer" },
];


// function getData(){
//     let output = ""

//     datas.forEach((data,index) => {
//         output += `<li> ${data.name} </li>`
//     })

//     // document.body.innerHTML= output;
//     document.getElementById("nameList").innerHTML = output;
// }


// getData();
function getData(){
    let output = "";

    datas.forEach((data) => {
        output += `<li>${data.name}</li>`;
    });

    document.getElementById("nameList").innerHTML = output;
}

getData();






// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name} </li>`;
//     });
//     document.body.innerHTML = output;
//   }, 2000);
// }

// getData();
