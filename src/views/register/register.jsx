import React, { Component } from 'react';
import './register.css';
import $http from '../../utils/http';

class Register extends Component {
    constructor () {
        super();
        this.toRegister = this.toRegister.bind(this);
    }
    render () {
        return <div id="register">
            <h2>欢迎注册</h2>
            <p>用户名：<input type="text" className="username" ref="username"/></p>
            <p>密&nbsp;&nbsp;&nbsp;码：<input type="password" className="password" ref="password"/></p>
            <p><button onClick={this.toRegister}>注册</button></p>
        </div>;
    }
    toRegister () {
        let { username, password } = this.refs;

        $http.post('/user/register', {
            username: username.value,
            password: password.value
        })
            .then(res => {
                if (res.success == 1) {
                    this.props.history.push('/login');
                }
            })
    }
}

export default Register;