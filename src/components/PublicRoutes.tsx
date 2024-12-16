import { Outlet, Navigate } from "react-router-dom"
// import { toast } from "react-toastify"

function PublicRoutes() {
    // const user = {userName: 'Osian'} 
    const user = true
  return (
    <>
      {!user ? <Outlet/> : <Navigate to="/"/>}
    </>
  )
}

export default PublicRoutes
