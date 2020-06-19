import React, {useState} from 'react'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'

function LoginPage(props) {
    //state
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            admId: Email,
            admPw: Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.code === 0) {
                props.history.push('/')
            } else {
                alert('!!'/*response.payload.msg*/);
            }
        })

        
    }

    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'
        }}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="text" value={Email} onChange={onEmailHandler}></input>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>
                <br></br>
                <button>Login</button>
            </form>
            
        </div>
    )
}

export default LoginPage
