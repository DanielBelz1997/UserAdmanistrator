import axios from "axios";
import type { CreateUserData, UpdateUserData, User } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const userApi = {
  getUsers: async (): Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
  },

  createUser: async (userData: CreateUserData): Promise<User> => {
    const response = await api.post("/users", userData);
    return response.data;
  },

  updateUser: async (id: number, userData: UpdateUserData): Promise<User> => {
    const response = await api.patch(`/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};
