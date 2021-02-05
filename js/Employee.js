save = (event) => {
    console.log("added");
    let empObj = {
        "firstname": document.getElementById("firstname").value,
        "lastname": document.getElementById("lastname").value,
        "emailId": document.getElementById("emailId").value,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "salary": document.getElementById("salary").value,
        "department": document.getElementById("department").value
    }

    console.log("name printing", empObj);
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/employee/add',
        data: JSON.stringify(empObj),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            if(result.success == false){
                document.getElementById("eData").innerHTML;
                alert("Invalid Input...!!");
            }else{
                alert("Employee Data added successfully..!!")
                window.open("file:///C:/VSCode/EmployeeManagementFrontEnd/html/HomePage.html");
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}
