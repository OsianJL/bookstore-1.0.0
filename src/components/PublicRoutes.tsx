import { Outlet, Navigate } from "react-router-dom"
import { toast } from "react-toastify"

function PublicRoutes() {
    // const user = {userName: 'Osian'} 
    const user = null
  return (
    <>
      {!user ? (
        <Outlet />
      ) : (
        // Mostrar un toast alert cuando no hay usuario
        (toast.success("Ya estas logueado my friend!"),
        (<Navigate to="/" />))
      )}
    </>
  )
}

export default PublicRoutes
