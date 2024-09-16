import { Link, Outlet } from "react-router-dom"

export const LayOut = () => {
    return <div>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add User</Link>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
}