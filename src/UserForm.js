import React, { useState, useEffect, useRef } from 'react';
import { addUser, updateUser, getUser } from './api';

const UserForm = (props) => {

    const id = props.match.params.id

    const [user, setUser] = useState({ name: '', surname: '' });

    const nameRef = useRef();

    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const formClear = () => {
        setUser({ name: '', surname: '' });
    }

    const formSubmit = () => {
        if (id) {
            updateUser(id, user).then(response => {
                if (response.data.message === "User has been updated.") {
                    props.history.push('/');
                } else {
                    alert('Save error');
                }
            }).catch(error => {
                alert('Save error');
            })
        } else {
            addUser(user).then(resposne => {
                if (resposne.status !== 201) {
                    alert('Save error');
                } else {
                    props.history.push('/');
                }
            }).catch(err => {
                alert('Save error');
            })
        }
    }

    // copomponentDidMount
    useEffect(() => {
        nameRef.current.focus();
        if (id) {
            getUser(id).then(response => {
                setUser(response.data);
            })
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 py-3">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>{id ? 'Edit user' : 'Create new user'}</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input ref={nameRef} name="name" onChange={handleChangeInput} value={user.name} type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname</label>
                            <input name="surname" onChange={handleChangeInput} value={user.surname} type="text" className="form-control" id="surname" placeholder="Enter your surname" />
                        </div>
                        <button onClick={formClear} type="submit" className="btn btn-danger mr-2">Clear</button>
                        <button onClick={formSubmit} type="submit" className="btn btn-primary">{id ? "Update" : "Create"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserForm;