import React, { Component } from 'react'


export default class Login extends Component {
    onLoginBtnClick() {
         this.props.getPhotos();
    }
    render() {
        const {users, github } = this.props
        return (
            <div>
            <div>
                <input type='text'></input>
                <input type='password'></input>
                <button className='btn' onClick={::this.onLoginBtnClick}>LOGIN</button>
            </div>
            <p>{users.asdf, github}</p>
            </div>
       )
    }
}