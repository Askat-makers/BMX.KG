import React, { useContext, useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const CheckOnAdmin = (props) => {

    const {checkOnAdmin} = useContext(adminContext)
    const [admin, setAdmin] = useState({})

    function handleInput(e){
        let obj = {
            ...admin,
            [e.target.name]: e.target.value
        }
        setAdmin(obj)
    }


    return (
        <div>
            <input onChange={handleInput} name="login" placeholder="login" type="text"/>
            <input onChange={handleInput} name="password" placeholder="password" type="password"/>
            <button onClick={() => checkOnAdmin(admin, props.history)}>Войти</button>
        </div>
    );
};

export default CheckOnAdmin;