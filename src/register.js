import React from 'react';
import './index.css';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user_name: '', nickname: '', picture: '', password: '', verify: '' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        let { user_name, nickname, picture, password, verify } = this.state
        event.preventDefault()
        alert(this.state.nickname)
        
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    Password(str,id) {
        return (
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form">{str}</label>
                </div>
                <div class="col-auto">
                    <input type="password" id={id} class="form-control" value={this.state}  onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
    Form(string, id, type) {
        return (
            <div class="col">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form">{string}</label>
                </div>
                <div class="col-auto">
                    <input type="Text" class="form-control" value={this.state}  onChange={this.handleChange} />
                </div>
            </div>
        );
    
    }


    render() {
        return (
            <div class="card rounded-9 shadow container-sm px-4 gx-5 col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div class="card-body">
                        <div class="justify-content-center mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#6f42c1" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>

                            <p>please fill the form to get in.</p>
                        </div>
                        <div class="row">
                            {this.Form("User Name","user_name")}
                            {this.Form("Nick Name", "nickname")}
                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Upload your profile picture</label>
                                <input class="form-control" type="file" value={this.state.picture} />
                            </div>
                        </div>
                        <div class="row">
                            {this.Password("Password","password")}
                            {this.Password("Validation", "verify")}
                        </div>

                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" class="btn btn-primary">Register</button>
                        <button type="button" class="btn btn-link">
                            Already registered? click to sign in!
                        </button>
                    </div>
                </form>
            </div>

        );

    }
}

export default Register;