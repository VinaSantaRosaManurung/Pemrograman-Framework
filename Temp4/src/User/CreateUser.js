import React, { Component } from "react";
import UserService from "../Services/UserService";

class CreateUser extends Component {


    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nama: "",
            email: "",
            username: "",
            password: "",
        };
        this.setValueNama = this.setValueNama.bind(this);
        this.setValueEmail = this.setValueEmail.bind(this);
        this.setValueUsername = this.setValueUsername.bind(this);
        this.setValuePassword = this.setValuePassword.bind(this);
    }

    deleteUser(id) {
        console.log(id);

        UserService.deleteUser(id).then((res) => {
            this.setState({
                users: this.state.users.filter((user) => user._id !== id),
            });
        });
    }

    componentDidMount() {
        if (this.state.id === "_add") {
            return;
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    nama: user.nama,
                    email: user.email,
                    username: user.username,
                    password: user.password,
                });
            });
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            nama: this.state.nama,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        };
        console.log("user => " + JSON.stringify(user));

        if (this.state.id === "_add") {
            UserService.createUser(user).then((res) => {
                this.props.history.push("/admin/user");
            });
        } else {
            UserService.updateUser(user, this.state.id).then((res) => {
                this.props.history.push("/admin/user");
            });
        }
    };


    setValueNama = (event) => {
        this.setState({ nama: event.target.value });
    };
    setValueEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    setValueUsername = (event) => {
        this.setState({ username: event.target.value });
    };
    setValuePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    cancel() {
        this.props.history.push("/admin/user");
    }
    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add User</h3>;
        } else {
            return <h3 className="text-center">Update User</h3>;
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nama: </label>
                                        <input
                                            placeholder="Nama"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.nama}
                                            onChange={this.setValueNama}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input
                                            placeholder="Email"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.setValueEmail}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Username: </label>
                                        <input
                                            placeholder="Username"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.setValueUsername}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input
                                            placeholder="Password"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.setValuePassword}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdateUser}
                                    >
                                        Save
                 </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                 </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateUser;