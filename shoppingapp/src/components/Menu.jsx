import { Link, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth";

const Menu =()=>{

    const {logout} = useAuth();
    const navigation = useNavigate();
    const handleLogout = () => {
        logout();
        navigation("/login");
    };
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link>
            </li>
             <li className="nav-item">
               <Link className="nav-link" to="/user-profile">User Profile</Link>
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
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
           <li className="nav-item">
                <Link className="nav-link" to="/rxjs/switchmap">switchMap</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/rxjs/mergemap">mergeMap</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/rxjs/concatmap">concatMap</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/rxjs/exhaustmap">exhaustMap</Link>
            </li> 
            <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
            </li> 
        </ul>
    )
}

export default Menu