export const USER_ADD = 'USER_ADD';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_DELETE = 'USER_DELETE';

export const actionAddUser = (user) => {
    return {
        type: USER_ADD,
        user
    }
}

export const actionUpdateUser = (id, user) => {
    return {
        type: USER_UPDATE,
        id,
        user
    }
}

export const actionDeleteUser = (id) => {
    return {
        type: USER_DELETE,
        id
    }
}