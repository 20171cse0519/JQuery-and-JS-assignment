/*function updateEmployeeData() {
    fetch("http://localhost:3000/employees/4", {
      method: "PUT",
      body: JSON.stringify({
        id: 4,
        first_name: "Lewis",
        last_name: "Hamilton",
        email: "Lewis@gmail.com",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }*/



//using jquery

function updateEmployeeData(){
  $.ajax({
    url: "http://localhost:3000/employees/3",
    type: "PUT",
    data: "name=Lewis&team=Mercedes",
    success: function(data) {
      alert('Load was performed.');
    }
  });
}

