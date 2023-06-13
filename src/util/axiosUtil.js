import axios from "axios";
import environmentProperties from "../config/environmentProperties";

export async function getAllEmployees() {
    try {
        let response = await axios.get(`${environmentProperties.baseUrl}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function updateEmployeeData(id, body) {

    try {
        let response = await axios.put(`${environmentProperties.baseUrl}/${id}`, body);
        if (response.status > 200 && response.status < 300) {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export async function deleteEmployee(id) {
    try {
        let response = await axios.delete(`${environmentProperties.baseUrl}/${id}`);
        if (response.status > 200 && response.status < 300) {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export async function addEmployee(data) {
    try {
        let response = await axios.post(`${environmentProperties.baseUrl}`, data);
        if (response.status > 200 && response.status < 300) {
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}