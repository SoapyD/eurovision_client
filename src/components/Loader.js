import Spinner from 'react-bootstrap/Spinner';
import React from "react"

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" variant="light" />
    </div>
  )
}

export default Loader