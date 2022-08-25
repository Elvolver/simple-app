import axios from "axios";
import api from "./index";

const postUrlPrefix = 'posts'

export default class PostService {
    static async getAll() {
        return await api.get(postUrlPrefix)
    }

    static async getById(id) {
        return await api.get(`${postUrlPrefix}/${id}`)
    }

    static async post(post) {
        return await api.post(postUrlPrefix, post)
    }

    static async update(post) {
        return await api.post(`${postUrlPrefix}/${post.id}`, post)
    }

    static async delete(id) {
        await console.log("id: " + id)
        return await api.delete(`${postUrlPrefix}/${id}`)
    }
}