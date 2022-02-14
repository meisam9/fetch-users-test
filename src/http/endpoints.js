import axios  from "axios";
export async function login(user) {
    const response = await  axios.post('https://reqres.in/api/login',user);
    const data = await response.data;
    return data;
}

export async function getUsers() {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    const data = await response.data;
    return data.data;
}

export async function getUserDetais (id) {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    const data =  await response.data;
    return data.data;
}