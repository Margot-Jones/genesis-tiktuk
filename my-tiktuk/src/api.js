import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data); //promise
}

export const followButton = (id) => {
    return instance.post(`follow/${id}`, {}, )
}

export const unfollowButton = (id) => {
    return instance.delete(`follow/${id}`)
}

export const profileUser = (userId) => {
    return instance.get(`profile/` + userId);
}


export const getStatus = (userId) => {
    return instance.get(`profile/status/` + userId);
}

export const updateStatus = (status) => {
    return instance.put(`profile/status/`, {status: status}, {withCredentials: true,
        headers: {"API-KEY": "32df5f50-9e04-4b4f-82da-924d52ef3929"}
    });
}