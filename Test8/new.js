const datas = [
    { name: "Jit", profession: "Software eng" },
    { name: "Roshan", profession: "Software Engineer" },
  ];
  
  function getData(){
      let output = "";
  
      datas.forEach((data) => {
          output += `<li>${data.name}</li>`;
      });
  
      document.getElementById("nameList").innerHTML = output;
  }
  
  getData();