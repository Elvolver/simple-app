import axios from "axios";

// const baseUrl = 'http://176.108.144.139:8080/posts'
const baseUrl = 'http://localhost:8081/posts'

export default class PostService {


    static async getAll() {
        return await axios.get(baseUrl, {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU5NTMwMzQ0LCJleHAiOjE2NjAxMzUxNDR9.aBgnfHu9t8rGOmmGDesWhEYS0_3T0jsnts6XE5huh3E'
            }
        })
    }

    static async getById(id) {
        return await axios.get(baseUrl + '/' + id)
    }

    static async post(post) {
        return await axios.post(baseUrl, post, {headers: {"Content-Type": "application/json",
                "Authorization": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU5NTMwMzQ0LCJleHAiOjE2NjAxMzUxNDR9.aBgnfHu9t8rGOmmGDesWhEYS0_3T0jsnts6XE5huh3E'
            }})
    }

    static async update(post) {
        return await axios.post(baseUrl + '/' + post.id, post, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU5NTMwMzQ0LCJleHAiOjE2NjAxMzUxNDR9.aBgnfHu9t8rGOmmGDesWhEYS0_3T0jsnts6XE5huh3E'
                }
        })
    }

    static async delete(id) {
        await console.log("id: " + id)
        return await axios.delete(baseUrl + '/' + id,  {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLnJ1Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU5NTMwMzQ0LCJleHAiOjE2NjAxMzUxNDR9.aBgnfHu9t8rGOmmGDesWhEYS0_3T0jsnts6XE5huh3E'
            }
        })
    }
}