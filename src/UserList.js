import React, { Component } from 'react';
import { getUsers, deleteUser } from './api';
import { Link } from 'react-router-dom';

class UserList extends Component {

    exist = true;

    state = {
        users: null,
        error: null
    }

    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderBody()}
                </tbody>
            </table>
        )
    }

    renderBody() {
        if (this.state.error) {
            return <tr>
                <td colSpan="4">{this.state.error.message}</td>
            </tr>
        } else if (this.state.users === null) {
            return <tr>
                <td colSpan="4">Loading</td>
            </tr>
        } else if (this.state.users.length === 0) {
            return <tr>
                <td colSpan="4">No data to display</td>
            </tr>
        } else {
            return this.state.users.map(user => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>
                            <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                            <Link className="btn btn-primary" to={'/edit/' + user.id}>Edit</Link>
                        </td>
                    </tr>
                )
            });
        }
    }

    handleDelete = (id) => {
        // this.setState({
        //     users: this.state.users.filter(user => user.id !== id)
        // });
        deleteUser(id).then(response => {
            if (response.data.message !== 'User has been deleted.') {
                alert('Delete Error');
            } else {
                this.fetchUsers();
            }
        }).catch(errro => {
            alert('Delete Error');
        })
    }

    fetchUsers = () => {
        getUsers().then(response => {
            if (this.exist) {
                this.setState({
                    error: null,
                    users: response.data
                });
            }
        }).catch(error => {
            if (this.exist) {
                this.setState({
                    error: error,
                    users: null
                });
            }
        })
    }

    componentDidMount() {
        this.fetchUsers();
        this.timer = setInterval(() => {
            this.fetchUsers();
        }, 5000);
    }

    componentWillUnmount() {
        this.exist = false;
        clearInterval(this.timer);
    }

}


export default UserList;
