import { useNavigate, useLocation } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'



export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginData, setLoginData] = useState({ username: 'emilys', password: '' });
  const { login,user } = useAuth();

  const handleLogin = (e) => {
      e.preventDefault();
    // console.log('Login button clicked');
    // userAuth$.next({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
    login(loginData);
    alert('Welcome '+user?.firstname)
    navigate(location.state?.from?.pathname || '/', { replace: true });
  
  }

 const handleUpdateLoginObject =(e)=>{
  setLoginData({ ...loginData, [e.target.id]: e.target.value });
 }

  return (
    <div>
      <h1>Login Page</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" 
          value={loginData.username}
           onChange={handleUpdateLoginObject} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" 
          value={loginData.password} 
          onChange={handleUpdateLoginObject} />
        </div>
      </form>


      <button className="btn btn-primary" onClick={handleLogin}>Login</button>

    </div>
  )
}
