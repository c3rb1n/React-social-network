import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "0ab3992a-e53d-4fa4-b26d-046e5e34ca4f"
    }
});

export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout() {
        return axiosInstance.delete(`auth/login`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status}).then(response => response.data);
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data);
    }
};

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`).then(response => response.data);
    }
};