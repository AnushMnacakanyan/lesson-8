import { Link, Outlet } from "react-router-dom"

export const LayOut = () => {
    return <div className="">
        <nav className="nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add User</Link>
        </nav>
        <div className="container">
            <Outlet/>
        </div>
    </div>
}