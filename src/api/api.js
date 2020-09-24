import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "0ab3992a-e53d-4fa4-b26d-046e5e34ca4f"
    }
});

export const authAPI = {
    getAuthUserData() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    }
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

export const followAPI = {
    createFollow(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data);
    },
    deleteFollow(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data);
    }
};