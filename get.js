/*var employeesList;
function getEmployeeList() {
  var xhttp = new XMLHttpRequest();
  var obj = this;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      employeesList = JSON.parse(xhttp.response);
      obj.displayEmployees();
    }
  };
  xhttp.open("GET", "http://localhost:3000/employees");
  xhttp.send();
}

function displayEmployees() {
  console.log("displayEmployees");
  let employeesDispCont = employeesList.map(
    (employee) => `<li> ${employee.first_name}-${employee.email} </li>`
  );
  console.log("employeesDispCont", employeesDispCont);
  let element = document.getElementById("employeeList");
  let innerHTML = "";
  for (let index = 0; index < employeesDispCont.length; index++) {
    innerHTML = innerHTML.concat(employeesDispCont[index]);
  }
  element.innerHTML = innerHTML;
}*/

//using jquery

$(document).ready(function(){
  $('button').click(function(){
    $.get("http://localhost:3000/employees", function(response){
      let employeeList = JSON.stringify(response);

    })
  })
})

