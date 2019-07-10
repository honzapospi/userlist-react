import axios from 'axios';

const rest = axios.create({
    baseURL: 'http://localhost:8888',
});

export const getUsers = () => {
    return rest.get('/user');
}

export const addUser = (user) => {
    return rest.post('/user', user);
}

export const deleteUser = (id) => {
    return rest.delete('/user/' + id.toString());
}

export const getUser = (id) => {
    return rest.get('/user/' + id.toString());
}

export const updateUser = (id, user) => {
    return rest.post('/user/' + id, user);
}