
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom";
import { useContext } from "react"
import Loader from "../Loader"

const Admin__Logout = () => {
    const [userContext, setUserContext] = useContext(UserContext)

    fetch(process.env.REACT_APP_SERVER_URL + "/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async response => {
      setUserContext(oldValues => {
        return { ...oldValues, details: undefined, token: null }
      })
      window.localStorage.setItem("logout", Date.now())
    })

    return userContext.token ? (
        <>
            <Loader />
        </>   
      ) : userContext.token === null ? (
        <>
            <Navigate to='/' />
        </>  
      ) : (
        <Loader />
    ) 
}

  export default Admin__Logout