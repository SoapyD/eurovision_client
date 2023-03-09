import { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"

import Loader from "../Loader"
import Admin__Routes from './Admin__Routes'
import Admin__User from './Admin__User'

function Admin__Refresh() {

    const [userContext, setUserContext] = useContext(UserContext)

    const verifyUser = useCallback(() => {
      fetch(process.env.REACT_APP_SERVER_URL + "/refreshToken", {
        method: "POST",
        credentials: "include",
        headers: { 
          "Content-Type": "application/json", 
        },
      }).then(async response => {
        if (response.ok) {
          const data = await response.json()
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
        } else {
          setUserContext(oldValues => {
            // return { ...oldValues, token: null }
            if(oldValues.token){
              return { ...oldValues, token: oldValues.token }
            }else{
              return { ...oldValues, token: null }
            }
          })
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 1 * 60 * 1000)
      })
    }, [setUserContext])
  
    useEffect(() => {
      verifyUser()
    }, [verifyUser])


    return userContext.token === null ? (
        <>
          <Admin__Routes/>
        </>    
      ) : userContext.token ? (
        <>
          <Admin__User />
          <Admin__Routes/>
      </>  
      ) : (
        <Loader />
      );

}

export default Admin__Refresh;