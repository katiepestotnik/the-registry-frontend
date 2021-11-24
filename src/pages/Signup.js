import { useState } from 'react';
import { Context } from "../Global";
import { useContext } from 'react';
import Header from "../components/Header";
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
        console.log(form.username, form.password)
        const { username, password } = form;
        fetch(`${state.url}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json()).then(data => {
            console.log("token is:", data.token);
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data));
            setState({ ...state, token: data.token });
            console.log('this is state:' , state)
            setForm({
                username: '',
                password: ''
            });
            props.history.push('/login')
        });
    }
    return (<div>
        <Header/>
        <form onSubmit={handleSubmit}>
            <input
                type="text" name="username" value={form.username}
                onChange={handleChange}></input>
            <input
                type="password" name="password" value={form.password}
                onChange={handleChange}></input>
            <input
                className="button-style"
                type="submit" value="REGISTER"></input>
        </form>
    </div>)
};
export default Signup;