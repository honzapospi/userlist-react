import React, { PureComponent } from 'react';
import { addUser, updateUser, getUser } from './api';

class UserForm extends PureComponent {

    constructor(props) {
        super(props)
        this.id = this.props.match.params.id;

        this.state = {
            name: props.name || '',
            surname: props.surname || ''
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    formSubmit = () => {
        if (this.id) {
            updateUser(this.id, this.state).then(response => {
                if (response.data.message === "User has been updated.") {
                    this.props.history.push('/');
                } else {
                    alert('Save error');
                }
            }).catch(error => {
                alert('Save error');
            })
        } else {
            addUser(this.state).then(resposne => {
                if (resposne.status !== 201) {
                    alert('Save error');
                } else {
                    this.props.history.push('/');
                }
            }).catch(err => {
                alert('Save error');
            })
        }
    }

    formClear = () => {
        this.setState({
            name: '',
            surname: ''
        });
    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 py-3">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h1>{this.id ? 'Edit user' : 'Create new user'}</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input name="name" onChange={this.handleChangeInput} value={this.state.name} type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname">Surname</label>
                                <input name="surname" onChange={this.handleChangeInput} value={this.state.surname} type="text" className="form-control" id="surname" placeholder="Enter your surname" />
                            </div>
                            <button onClick={this.formClear} type="submit" className="btn btn-danger mr-2">Clear</button>
                            <button onClick={this.formSubmit} type="submit" className="btn btn-primary">{this.id ? "Update" : "Create"}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if (this.id) {
            getUser(this.id).then(response => {
                this.setState({
                    name: response.data.name,
                    surname: response.data.surname
                });
            })
        }
    }
}

export default UserForm;