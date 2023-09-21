import { Outlet, Link } from "react-router-dom";

const  Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/inicio">Inicio</Link>
                    </li>
                    <li>
                        <Link to = "/home">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to = "/search">Search</Link>
                    </li>
                </ul>
                {/* <Link to = "/Modales">Modales</Link> */}
            </nav>
            <hr />
            <Outlet />  
        </div>
    )
}

export default Layout;