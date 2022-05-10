import axios from "axios";

const baseUrl = 'http://home.volkovd.ru:8080/posts'

export default class PostService {


    static async getAll() {
        return await axios.get(baseUrl)
    }

    static async getById(id) {
        return await axios.get(baseUrl + '/' + id)
    }

    static async post(post) {
        return await axios.post(baseUrl, post, {headers: {"Content-Type": "application/json"}})
    }

    static async update(post) {
        return await axios.post(baseUrl + '/' + post.id, post, {headers: {"Content-Type": "application/json"}})
    }

    static async delete(id) {
        await console.log("id: " + id)
        return await axios.delete(baseUrl + '/' + id)
    }
}