const users = [
    { id: 1, name: 'Honza', surname: 'Pospíšil' },
    { id: 2, name: 'Pepa', surname: 'Novák' },
    { id: 3, name: 'Tomáš', surname: 'Dvořák' },
]

export default (state = { list: users }, action) => {
    return state;
}