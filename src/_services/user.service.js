import config from 'config';
import { authHeader } from '../_helpers';
import {handleResponse} from "../_helpers/response-handler";

export const userService = {
    login,
    logout,
    register,
    getUsers,
    getOnlineUsers,
    getByIdOrEmailOrPhone,
    update,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/account/generate/jwt/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUsers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/account/user/`, requestOptions).then(handleResponse);
}

function getOnlineUsers() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/account/user/online/`, requestOptions).then(handleResponse);
}

function getByIdOrEmailOrPhone(param) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    if (param.id)
        return fetch(`${config.apiUrl}/account/user/?id=${param.id}`, requestOptions).then(handleResponse);
    else if (param.email)
        return fetch(`${config.apiUrl}/account/user/?email=${param.email}`, requestOptions).then(handleResponse);
    else if (param.phone)
        return fetch(`${config.apiUrl}/account/user/?phone=${param.phone}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}
