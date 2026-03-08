import { axiosInstance } from "../../axiosInstance";

export const getPositions = async () => {
    const response  = await axiosInstance.get("/positions");
    return response.data;
}

export const createPosition = async ({id, data}) => {
    const response = await axiosInstance.post(`/positions/${id}`, {data})
    return response.data;
}