import { USER_ADD, USER_UPDATE, USER_DELETE } from './userActions';

const users = [
    { id: 1, name: 'Honza', surname: 'Pospíšil' },
    { id: 2, name: 'Pepa', surname: 'Novák' },
    { id: 3, name: 'Tomáš', surname: 'Dvořák' },
]

let counter = 3;

export default (state = { list: users }, action) => {
    if (action.type === USER_ADD) {
        const user = action.user;
        counter++;
        user.id = counter;
        return { ...state, list: [...state.list, user] }
    } else if (action.type === USER_UPDATE) {
        const users = state.list.map(user => {
            if (user.id === action.id) {
                return { ...action.user, id: action.id }
            } else {
                return user;
            }
        });
        return { ...state, list: users }
    } else if (action.type === USER_DELETE) {
        return { ...state, list: state.list.filter(user => user.id !== action.id) }
    }
    return state;
}