import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "cf9a14f8-27a1-4b04-b9ba-8660e5eff9a2"
    }
});

export const authAPI = {
    me() {
        return axiosInstance.get("auth/me").then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return axiosInstance.post("auth/login", {email, password, rememberMe, captcha}).then(response => response.data);
    },
    logout() {
        return axiosInstance.delete("auth/login").then(response => response.data);
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
        return axiosInstance.put("profile/status", {status}).then(response => response.data);
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return axiosInstance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data);
    },
    saveProfile(profile) {
        return axiosInstance.put("profile", profile).then(response => response.data);
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

export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance.get("security/get-captcha-url").then(response => response.data);
    }
};