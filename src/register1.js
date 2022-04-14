
import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { user_name: '', name: '', picture: null, password: '', verify: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Form submitting logic, prevent default page refresh 
  handleSubmit(event) {
    const { user_name, nickname, picture, password, verify } = this.state
    event.preventDefault()
    if (password != verify) {
      alert("make sure you have copied exactly the password and verified it.")
    }
    if (!password.match("(([A-Z]|[0-9]|[a-z])+)")){
      alert("your password is not good")
    }
    alert(`
      ____Your Details____\n
      user_name : ${user_name}
      Name : ${nickname}
      password : ${password}
      verify : ${verify}
      picture: ${picture}
    `)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div class="card rounded-9 shadow container-sm px-4 gx-5 col-md-6">
        <div class="justify-content-center mx-auto">
          <p>Welcome!</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#6f42c1" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>

          <p>Please fill the form to get in.</p>
        </div>
        <form class="form-control p-4 d-flex" onSubmit={this.handleSubmit}>
          <p class="row row-cols-2">
          <div class="col">
            <label htmlFor='user_name' class="col-form p-2">User name</label>
            <input
              name='user_name'
              value={this.state.user_name}
              onChange={this.handleChange}
              class="form-control"
            />
          </div>
          <div class="col">
            <label htmlFor='name' class="col-form p-2">Nickname</label>
            <input
              name='nickname'
              value={this.state.nickname}
              onChange={this.handleChange}
              class="form-control"
            />
          </div>
          </p>
          <p class="row row-cols-2">
            <input type="file" name='picture' value={this.state.picture} onChange={this.handleChange} class="form-control" />
          <div class="col">
            <label htmlFor='password' class="col-form p-2">Password</label>
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              class="form-control"
            />
          </div>
          <div class="col">
            <label htmlFor='verify' class="col-form p-2">Verification</label>
            <input
              name='verify'
              type='password'
              value={this.state.verify}
              onChange={this.handleChange}
              class="form-control"
            />
          </div>
          </p>
          <div>
            <button class="btn btn-primary align-items-end">Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form