import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){

    const [username,setUsername] = useState('username')

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    const [password,setPassword] = useState('')

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    const [showErrorMessage,setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
        }else{
            setShowErrorMessage(true) 
        }
    }


    return(
        <div className="Login">
            <h1>Please Login </h1>
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed, Please check your credentials</div>}
            <div className="Loginform">
            <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>

        </div>
    )
}