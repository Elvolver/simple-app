import api from "./index";

const postUrlPrefix = 'users'

export default class UserService {
    static async getProfile() {
        return await api.get(`${postUrlPrefix}/profile`)
    }

    static async editProfile(data) {
        return await api.post(`${postUrlPrefix}/profile`, data)
    }

    static async editAvatar(data) {
        return await api.post(`${postUrlPrefix}/profile/avatar`, data)
    }
}