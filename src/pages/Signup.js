import { useState } from 'react';
import { Context } from "../Global";
import { useContext } from 'react';

const Signup = (props) => {
    //global state
    const [state, setState] = useContext(Context);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        fetch(`${state.url}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json()).then(data => {
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data));
            setState({ ...state, token: data.token });
            setForm({
                username: '',
                password: ''
            });
            props.history.push('/login')
        });
    }
    return (
    <div className="spacing-form">
    <div className="overlap-content">
        <h3>&nbsp;   Create your Account...</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for="CreateUsername" className="form-label">Username</label>
            <input
                type="text" name="username" value={form.username} className="form-control"
                onChange={handleChange}></input></div>
            <div className="mb-3">
            <label for="CreatePassword" className="form-label">Password</label>
            <input
                type="password" name="password" value={form.password} className="form-control"
                onChange={handleChange}></input></div>
            <input
                type="submit" value="REGISTER" className="btn btn-primary"></input>
        </form>
    </div>
    </div>
    )
};
export default Signup;