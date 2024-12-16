import { Outlet, Navigate } from "react-router-dom"
// import { toast } from "react-toastify"

function PrivateRoutes() {
    // const user = {userName: 'Osian'} 
    const user = true
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />)
      }
    </>
  )
}

export default PrivateRoutes
