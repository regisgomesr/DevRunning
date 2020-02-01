import axios from 'axios'


const Api = base => {

    const client = axios.create({
        baseURL: base
    })

    const token = localStorage.getItem('token')
    
    const get = endpoint => client.get(endpoint, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })

    const remove = endpoint => client.delete(endpoint, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })

    const update = (endpoint, data) => client.patch(endpoint, data, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })

    return {
        getUser: id => get(`/users/${id}`),
        getUsers: () => get(`/users`),
        removeUser: id => remove(`/users/${id}`),
        updateUser: data => update(`/users/${data.id}`, data)
    }
}
export default Api