import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"


function Authentication({updateUser}) {
  const [signUp, setSignUp] = useState(false)
  const history = useHistory()
  const [errors, setErrors] = useState(null)

  const handleClick = () => setSignUp((signUp) => !signUp)
  // 3.✅ Finish building the authentication form with formik
  // if signUp is true use the path '/users' else use '/login' (we will be writing login soon)
  // Complete the post and test our '/users' route 
  // 3.4 On a successful POST add the user to state (updateUser is passed down from app through props) and redirect to the Home page.
  
  // 3.1 create a formSchema and use yup to make some client side validations
  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter a user name"),
    email: yup.string().email(),
    password: yup.string().required("Please enter a password")
  })
  
  // 3.2 Use formik to handle the value, onchange and onsubmit of the form
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: formSchema,
    // 3.3 on submit create a POST. 
    onSubmit: (values) => {
        // 3.4 There is a button that toggles the component between login and sign up.
        fetch(signUp ? '/signup' : '/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        .then(res => {
          if (res.ok){
            res.json()
            .then(user => {
              updateUser(user)
              setErrors(null)
              history.push('/')
            })
          } else {
            res.json().then(setErrors)
          }
        })
      } 
    })
  // 4.✅ return to server/app.py to build the next route
 
    return (
        <> 
        <h2 style={{color:'red'}}> {'Errors Here!!'}</h2>
        <h2>Please Log in or Sign up!</h2>
        <h2>{signUp?'Already a member?':'Not a member?'}</h2>
        <button onClick={handleClick}>{signUp?'Log In!':'Register now!'}</button>
        <Form onSubmit={formik.handleSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
        <label>
        Password
        </label>
        <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
        {signUp&&(
          <>
          <label>
          Email
          </label>
          <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
          </>
        )}
        <input type='submit' value={signUp?'Sign Up!':'Log In!'} />
      </Form>
        </>
    )
}

export default Authentication

export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:#42ddf5;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`