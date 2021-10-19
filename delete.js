/*function deleteEmployeeData() {
    fetch("http://localhost:3000/employees/2", {
      method: "DELETE",
    });
  }*/

//using jquery

function deleteEmployeeData(){
  $.ajax({
    url: "http://localhost:3000/employees/1",
    type: "DELETE",
  })
  alert("Data deleted");
}