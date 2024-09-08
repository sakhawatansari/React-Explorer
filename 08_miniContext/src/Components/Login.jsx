import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    // create State for username and password
    const [username, setUsername] = useState('') // set default empty value('')
    const [password, setPassword] = useState('')

    // fetch the value using useConext and this is similar to useState Hook
    const {setUser} = useContext(UserContext)

    // create method for handleSubmit onClick Button
    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value ={username} onChange={(event) => setUsername(event.target.value)} placeholder='username' />
            {" "}
            <input type="text" value ={password} onChange={(event) => setPassword(event.target.value)} placeholder='password' />
            {" "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
