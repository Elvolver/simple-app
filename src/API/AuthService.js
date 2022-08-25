import api from "./index";

const authUrlPrefix = '/api/v1/auth'

export default class AuthService {

    static async login(auth) {
        return await api.post(`${authUrlPrefix}/login`, auth)
    }

    static async registration(registrationDTO) {
        return await api.post(`${authUrlPrefix}/registration`, registrationDTO)
    }

    static async logout() {
        return await api.post(`${authUrlPrefix}/logout`)
    }

    static async checkEmail(registrationDTO) {
        return await api.post(`${authUrlPrefix}/checkLogin`, registrationDTO)
    }
}