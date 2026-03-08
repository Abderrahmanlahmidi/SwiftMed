import { axiosInstance } from "../../axiosInstance"

export const getIncidents = async () => {
    const response = await axiosInstance.get("/incidents");
    return response.data
}

export const createIndicent = async ({data}) => {
    console.log("new incident data:" , data);
    const response = await axiosInstance.post(`/incidents`, data );
    return response.data;
}