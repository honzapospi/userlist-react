import React, { useEffect, useContext } from 'react';
import { getUsers, deleteUser } from './api';
import { Link } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import { connect } from 'react-redux';

const UserList = ({ users, error }) => {

    const { theme } = useContext(ThemeContext);

    let exist = true;
    let timer;

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
                            <button onClick={() => { }}>Delete</button>
                            <Link className="btn btn-primary" to={'/edit/' + user.id}>Edit</Link>
                        </td>
                    </tr>
                )
            });
        }
    }

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

const mapStateToProps = (state) => {
    return {
        users: state.users.list,
        error: state.users.error
    }
}

export default connect(mapStateToProps)(UserList);
