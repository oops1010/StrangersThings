import React, {useState} from 'react'

import { logInUser } from "../api/Requests";

const LogIn = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {
        console.log("onSubmitHandler() called");
        event.preventDefault();
        const {error, token, message} = await logInUser(username, password);
        setToken(token);
    }


    return (<form className="login-form" onSubmit={onSubmitHandler}>
        <h1>Login Form</h1>
        <div className="field">
            <label>Username</label>
            <input
            type = "text"
            value = {username}
            placeholder = "username"
            required
            onChange = {(event) => {setUsername(event.target.value)}}
            />
            
        </div>
        <div className="field">
            <label>Password</label>
            <input
            type = "password"
            value = {password}
            placeholder = "password"
            minLength = "8"
            required
            onChange={(event) => {setPassword(event.target.value)}}
            />
        </div>
        <button className="submit-form" type = "submit">Submit</button>
    </form>);
}

export default LogIn