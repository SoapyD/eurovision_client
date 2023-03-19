import React, { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import Loader from "../Loader"

const Admin__User = () => {
  const [userContext, setUserContext] = useContext(UserContext)

  const fetchUserDetails = useCallback(() => {
    // console.log('token:',userContext.token)
    fetch(process.env.REACT_APP_SERVER_URL + "/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()

        setUserContext(oldValues => {
          // if(!('login_state' in oldValues)){
          //   data.login_state = 0
          //   console.log("adding")
          // }
          // data.login_state = 0
          console.log(data)          
          return { ...oldValues, details: data }
        })
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload()
        } else {
          setUserContext(oldValues => {
            return { ...oldValues, details: null }
          })
        }
      }
    })
  }, [setUserContext, userContext.token])

  useEffect(() => {
    // fetch only when user details are not present
    if (!userContext.details) {
      fetchUserDetails()
    }
  }, [userContext.details, fetchUserDetails])

  const refetchHandler = () => {
    // set details to undefined so that spinner will be displayed and
    //  fetchUserDetails will be invoked from useEffect
    setUserContext(oldValues => {
      return { ...oldValues, details: undefined }
    })
  }

  return userContext.details === null ? (
    <></>
    // "Error Loading User details"
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <></>
    // "User Data Loaded"
  )
}

export default Admin__User
