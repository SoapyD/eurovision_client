import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { UserContext } from "../../context/UserContext"
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function Admin__Register() {

    //Room State
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [userContext, setUserContext] = useContext(UserContext)    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    

    const formSubmitHandler = e => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")
    
        const genericErrorMessage = "Something went wrong! Please try again later."
    
        fetch(process.env.REACT_APP_SERVER_URL + "/register", {
            method: "POST",
            credentials: "include",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                username: username, 
                password: password 
            }),
        })
        .then(async response => {
            setIsSubmitting(false)
            if (!response.ok) {
                if (response.status === 400) {
                    setError("Please fill all the fields correctly!")
                } else if (response.status === 401) {
                    setError("Invalid username and password combination.")
                } else {
                    setError(genericErrorMessage)
                }
            } else {
                const data = await response.json()
                setUserContext(oldValues => {
                    return { ...oldValues, token: data.token }
                })
            }
        })
        .catch(error => {
            setIsSubmitting(false)
            setError(genericErrorMessage)
        })
    }

    return !userContext.token ? (
    <>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={formSubmitHandler} className="auth-form">
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter username" 
        value={username} onChange={e => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" disabled={isSubmitting} type="submit">
        {`${isSubmitting ? "Registering" : "Register"}`}
      </Button>
    </Form>
    </>) : (
        <Navigate to='/' />        
    )

}

export default Admin__Register;