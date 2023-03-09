
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/test.css";

import Admin__Refresh from './components/Admin/Admin__Refresh'

// import { useCallback, useContext, useEffect, useState } from "react"
// import Loader from "./components/Loader"
// import { UserContext } from "./context/UserContext"

// import Admin__Routes from './components/Admin/Admin__Routes'
// import Admin__User from './components/Admin/Admin__User'

function App() {

  /*
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
    <div className="App">
      <Admin__Routes/>
    </div>    
  ) : userContext.token ? (
    <div className="App">
      <Admin__User />
      <Admin__Routes/>
  </div>  
  ) : (
    <Loader />
  );
  */

  return (
    <div className="App">
      <Admin__Refresh/>
    </div>       
  )

}

export default App;