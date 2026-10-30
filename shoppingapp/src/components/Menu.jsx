import { Link } from "react-router"

const Menu =()=>{
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    )
}

export default Menu