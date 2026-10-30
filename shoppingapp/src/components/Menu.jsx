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
                <Link className="nav-link" to="/welcome">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/child">child</Link>
            </li>
        </ul>
    )
}

export default Menu