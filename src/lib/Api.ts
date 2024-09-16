import axios from "axios";
import { IUser } from "./types";

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axios.get(`http://localhost:3004/users`)
    return response.data
}

export const deleteUser = async (id: number | string): Promise<void> => {
    await axios.delete(`http://localhost:3004/users/${id}`)
}

export const createAddUser = async ( user: IUser): Promise<IUser> => {
    const response = await axios.post(`http://localhost:3004/users`,user)
    return response.data
}

export const getUserById = async (id: number): Promise<IUser> => {
    const response = await axios.get(`http://localhost:3004/users/${id}`);
    return response.data;
};

export const updateUser = async (id: number, user: IUser): Promise<IUser> => {
    const response = await axios.put(`http://localhost:3004/users/${id}`, user);
    return response.data;
};