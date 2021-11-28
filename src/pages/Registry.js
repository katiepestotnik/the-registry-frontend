import Hyperlink from "../components/Hyperlink"
import { useState, useEffect } from 'react';
import { Context } from "../Global";
import { useContext } from 'react';


const Registry = (props) => {
    const [state, setState] = useContext(Context);
    console.log(state)
    useEffect(() => {
        if (state.token === null) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        }
    }, [])
    if (state.token === undefined) {
        alert('Login not verified: Register or Reenter Login')
        props.history.push('/')
    }

    return (
        <>
        <Hyperlink />
        </>
    );
}
export default Registry