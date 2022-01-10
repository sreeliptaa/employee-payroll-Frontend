/* eslint-disable no-unused-vars */
import axios from 'axios';
import deleteicon from '../../assets/icons/delete-black-18dp.svg'
import editicon from '../../assets/icons/create-black-18dp.svg'
import image1 from '../../assets/images/logo.png';
import React, { useState, useEffect } from 'react';
import EmployeeService from '../../service/EmployeeService';
import "../components/home/HomeComponent.scss";
import profile4 from '../../assets/profile-images/Ellipse -7.png'

const HomeComponent = () => {
    const [users , setUser] = useState([]);
    
    useEffect(() => {
        console.log("hello")
        loadUsers();
    } , []);

 const addEmployee = () => {
        this.props.history.push('/home');
    }
    
    const loadUsers = async() => {
        const result =  await axios.get("http://localhost:8080/employee/getall");
      console.log(result.data); 
      setUser(result.data); 
    }

  const  editEmployee = (id)  => {
        this.props.history.push(`/edit/${id}`)
        console.log(`id is${id}`)
        // this.props.history.push('/kk1');
    }

  const  deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }


    const {name ,gender, imagePath, departments , salary, note , Day , Month, Year, startDate }= users;
    return (
        <> 
        <div class="main-content">
                <div class="header-content">
                    <div class="emp-details-text">
                        Employee Details <div class="emp-count"></div>
                    </div>
                    <img src={image1} alt="logo" />
                    <div className='add-button'>
                        <button className='add-button' onClick={this.addEmployee}>Add user</button></div>
                    {/* <Link to='/kk' class = "add-button">
                        <img src = {imglogo} alt = ""/>Add User
                        </Link> */}
                </div>
                <div class="table-main">
                    <table class="table" id="table-display">
                        <tr><th>ImagePath</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>
                        {
                            users.map(

                                (employees) =>
                                    <tr key={employees.employeeId}>
                                        <td><img className="profile" src={profile4} alt="hii" /></td>
                                        <td>{employees.imagePath}</td>
                                        <td>{employees.name}</td>
                                        <td>{employees.gender}</td>
                                        <td>{employees.departments && employees.departments.map(dept => (<div className='dept-label'>{dept}</div>))}</td>
                                        <td>{employees.salary}</td>
                                        <td>{employees.startDate}</td>
                                        <td>
                                            <img onClick={() =>
                                                this.deleteEmployee(employees.employeeId)
                                            } src={deleteicon} alt="delete" />

                                            <img onClick={() => this.editEmployee(employees.employeeId)} src={editicon} alt="edit" />
                                            {/* <Link className='btn btn-outline-primary mr-2' to={`/edit/${employees.empoyeeId}`}>Edit</Link> */}
                                            {/* <button
                      onClick={() =>
                        this.editEmployee(employees.employeeId)
                      }
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.deleteEmployee(employees.employeeId)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button> */}
                                        </td>
                                    </tr>
                            )
                        }
                    </table>
                </div>
            </div>
            
        </>
    );
}

export default HomeComponent ;