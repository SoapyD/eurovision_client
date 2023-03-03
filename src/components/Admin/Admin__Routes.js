import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "../../pages/Header";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import Register from "../../pages/Register";
import Room from "../../pages/Room";
import NoPage from "../../pages/NoPage";

function Admin__Routes() {

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />          
          <Route path="register" element={<Register />} />          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default Admin__Routes;