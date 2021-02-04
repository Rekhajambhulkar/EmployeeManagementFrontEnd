save = (event) => {
    console.log("added");
    let empObj = {
        "FirstName": document.getElementById("fname").value,
        "LastName": document.getElementById("lname").value,
        "Email": document.getElementById("email").value,
        "Salary": document.getElementById("salary").value,
        "Department": document.getElementById("department").value
    }

    console.log("name printing", empObj);
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/employee',
        data: JSON.stringify(empObj),
        contentType: "application/json",
        success: function (data) {
            if(data.success == false){
               // document.getElementById("eData").innerHTML;
                alert("Invalid Input...!!")
            }else{
                alert("Employee Data added successfully..!!")
                window.open("file:///C:/VSCode/EmployeeManagementFrontEnd/html/HomePage.html")
            }
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}

