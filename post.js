/*function addEmployeeData() {
    console.log("In Post Request");
    let employee = {
      first_name: "Max",
      last_name: "Verstappen",
      email: "Max@gmail.com",
    };
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }*/

//using jquery

function addEmployeeData(){
  console.log("In post request");
  let employee = {name:"Max Verstappen",team:"Redbull"};
  $.post("http://localhost:3000/employees", employee,function(response){
    console.log(response)
  })
  alert("Data posted");
  
}