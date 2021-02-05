let EmpData = [];

$(document).ready(function () {
    console.log("Calling get");
    let innerHTML = '';

    $.ajax({
        url: 'http://localhost:3000/employee/read',
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log("result is", data);
            let empArray = data.data;
            $.each(empArray, function (index, value) {
                EmpData.push(value._id);
                innerHTML += `<tr>
                    <td>${value.firstname}</td>
                    <td>${value.lastname}</td>
                    <td>${value.emailId}</td>
                    <td>${value.salary}</td>
                    <td>${value.department}</td>
                    <td><button type="botton" class="edit-button" onclick="updateData(${index})">Edit</td>
                    <td><button type="botton" class="delete-button" onclick="deleteData(${index})">Delete</td>
                </tr>`
            })
            $('#table-Display').append(innerHTML)
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
});

deleteData = (id) => {
    let employeeDataId = EmpData[id];
    $.ajax({
        type: 'delete',
        url: ('http://localhost:3000/employee/' + employeeDataId),

        success: (result) => {
            alert("Employee name: " + result.data.firstname + " " + result.data.lastname + " Deleted successfully!!");
            location.reload();
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });

}