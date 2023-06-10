
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
import "./AddEmployee.css";
import { Toast } from "primereact/toast"
import { addEmployee } from '../util/axiosUtil';


export default function AddEmployee() {

    const initialState = {
        fullname: "",
        email: "",
        phone_number: "",
        address: "",
        job_title: "",
        department: "",
        startDate: "",
        salary: "",
        payment_method: "",
        bank_account_details: ""
    }
    const [employeeData, setEmployeeData] = useState(initialState);

    const toast = useRef(null);


    const handlechange = ({ target }) => {
        console.log(target);
        const { id, value } = target;
        const newValue = {}
        newValue[id] = value;
        setEmployeeData(prevState => ({ ...prevState, ...newValue }))
    }

    const show = (severity, summary, detail) => {
        toast.current.show({ severity, summary, detail });
    };

    const handleAddEmployee = () => {

        const added = addEmployee(employeeData);
        if (added) {
            show("success", "Added Employee", `Employee Added successfully`)
        } else {
            show("error", "Failed to Add", `Adding Employee failed, please retry`)
        }
    }

    const resetForm = () => {
        setEmployeeData(initialState);
    }

    return (
        <>
            <Toast ref={toast} />
            <div className='add-employee-form'>

                <h1>Add Employee</h1>
                <span className="p-float-label">
                    <InputText id="fullname" value={employeeData.fullname} onChange={handlechange} />
                    <label htmlFor="Fullname">Full name</label>
                </span>
                <span className="p-float-label">
                    <InputText id="email" value={employeeData.email} onChange={handlechange} />
                    <label htmlFor="Email">Email</label>
                </span>

                <span className="p-float-label">
                    <InputText id="phone_number" value={employeeData.phone_number} onChange={handlechange} />
                    <label htmlFor="phone_number">Phone number</label>
                </span>
                <span className="p-float-label">
                    <InputText id="address" value={employeeData.address} onChange={handlechange} />
                    <label htmlFor="address">Address</label>
                </span>
                <span className="p-float-label">
                    <InputText id="job_title" value={employeeData.job_title} onChange={handlechange} />
                    <label htmlFor="job_title">Job title</label>
                </span>
                <span className="p-float-label">
                    <InputText id="department" value={employeeData.department} onChange={handlechange} />
                    <label htmlFor="department">Department</label>
                </span>
                <span className="p-float-label">
                    <InputText id="salary" value={employeeData.salary} onChange={handlechange} />
                    <label htmlFor="salary">Salary</label>
                </span>
                <span className="p-float-label">
                    <InputText id="payment_method" value={employeeData.payment_method} onChange={handlechange} />
                    <label htmlFor="payment_method">Payment method</label>
                </span>
                <span className="p-float-label bank-account-details">
                    <InputText id="bank_account_details" value={employeeData.bank_account_details} onChange={handlechange} />
                    <label htmlFor="bank_account_details">Bank account details</label>
                </span>

                <div className="btn-container">
                    <Button label='Add Employee' className='btn-add-employee' onClick={handleAddEmployee} />
                    <Button label='Reset' onClick={resetForm} />
                </div>

            </div>
        </>
    )
}
