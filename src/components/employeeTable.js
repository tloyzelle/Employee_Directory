import React from "react";
import './employeeTable.css'

function EmployeeTable (props) {

    return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Employee</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((employee, index) => 
                        <tr key={index}>
                            <td scope='row' data-label='Employee'><img src={employee.picture.thumbnail} alt="employee" height={100} width={100}></img></td>
                            <td data-label='Last Name'>{employee.name.last}</td>
                            <td data-label='First Name'>{employee.name.first}</td>
                            <td data-label='Email'>{employee.email}</td>
                            <td data-label='Gender'>{employee.gender}</td>
                            <td data-label='Phone'>{employee.phone}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        )
}


export default EmployeeTable;