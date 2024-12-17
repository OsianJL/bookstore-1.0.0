import { Outlet, Navigate } from "react-router-dom"
import { toast } from "react-toastify"

function PrivateRoutes() {
    // const user = {userName: 'Osian'} 
    const user = null
  return (
    <>
     {user ? (
        <Outlet />
      ) : (
        // Mostrar un toast alert cuando no hay usuario
        (toast.error("No tienes acceso, ve a loguearte..."),
        (<Navigate to="/login" />))
      )}
    </>
  )
}

export default PrivateRoutes
