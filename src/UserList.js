import React, { useState, useEffect, useContext } from 'react';
import { getUsers, deleteUser } from './api';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';

const UserList = () => {

    const { theme } = useContext(ThemeContext);

    let exist = true;
    let timer;

    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    const renderBody = () => {
        if (error) {
            return <tr>
                <td colSpan="4">{error.message}</td>
            </tr>
        } else if (users === null) {
            return <tr>
                <td colSpan="4">Loading</td>
            </tr>
        } else if (users.length === 0) {
            return <tr>
                <td colSpan="4">No data to display</td>
            </tr>
        } else {
            return users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                            <Link className="btn btn-primary" to={'/edit/' + user.id}>Edit</Link>
                        </td>
                    </tr>
                )
            });
        }
    }

    const handleDelete = (id) => {
        // this.setState({
        //     users: this.state.users.filter(user => user.id !== id)
        // });
        deleteUser(id).then(response => {
            if (response.data.message !== 'User has been deleted.') {
                alert('Delete Error');
            } else {
                fetchUsers();
            }
        }).catch(errro => {
            alert('Delete Error');
        })
    }

    const fetchUsers = () => {
        getUsers().then(response => {
            if (exist) {
                setUsers(response.data);
                setError(null);
            }
        }).catch(error => {
            if (exist) {
                setError(error);
            }
        })
    }

    // componentDidMount
    useEffect(() => {
        fetchUsers();
        console.log('Creating interval');
        timer = setInterval(() => {
            fetchUsers();
        }, 5000);
    }, []);

    // componentWinUnmount
    useEffect(() => {
        return () => {
            exist = false;
            clearInterval(timer);
        }
    });


    return (
        <table className={`table table-${theme}`}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}

export default UserList;
