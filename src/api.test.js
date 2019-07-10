import { getUsers, addUser, deleteUser, updateUser } from './api';

describe('Test of API', () => {
    it('Getting users with method getUsers()', () => {
        expect.assertions(1);
        return getUsers().then(response => {
            expect(Array.isArray(response.data)).toBe(true);
        });
    });
    it('Create new user with method addUser()', () => {
        expect.assertions(2);
        return addUser({ name: 'Honza', surname: 'Pospíšil' }).then(response => {
            expect(response.status).toBe(201);
            expect(typeof response.data.id).toBe('number');
        });
    })
    it('Delete user with method deleteUser()', () => {
        expect.assertions(1);
        return addUser({ name: 'Honza', surname: 'Pospíšil' }).then(response => {
            return deleteUser(response.data.id).then(response => {
                expect(response.data.massage).toBe("User has been deleted.");
            });
        });
    })
    it('Update user with method updateUser()', () => {
        expect.assertions(1);
        return addUser({ name: 'Honza', surname: 'Pospíšil' }).then(response => {
            return updateUser(response.data.id).then(response => {
                expect(response.data.message).toBe("User has been updated.");
            });
        });
    })
})

