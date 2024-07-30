import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

function Signup() {
    const [Name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('users')
        if (auth) {
            navigate('/')
        }
    })
    

    const collectData = async () => {
        console.log(Name, password, email)
        const result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ Name, password, email }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
        let responce = await result.json()
        console.log(responce)
        localStorage.setItem("users", JSON.stringify(responce))  // Store Data in Local Storage 
        if(responce){
            navigate('/')
        }
    }



    function nameHandler(event) {
        setName(event.target.value)
    }


    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function emailHandler(e) {
        setEmail(e.target.value)
    }

    return (
        <div className='register'>
            <h1>Register page</h1>
            <label>Name</label>&nbsp;

            <input className='inputBox'
                type='text'
                placeholder='Enter Name'
                value={Name}
                onChange={nameHandler}
            />

            <br></br>
            <br></br>


            <label>Password</label>&nbsp;

            <input className='inputBox'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={passwordHandler}
            />


            <br></br>
            <br></br>


            <label>Email</label>&nbsp;

            <input className='inputBox'
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={emailHandler}
            />

            <br></br>
            <br></br>


            <button onClick={collectData} className='SignupBTN' type='button' >Signup</button>
        </div>
    )
}

export default Signup
