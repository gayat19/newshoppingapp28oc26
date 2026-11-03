import { useNavigate, useLocation } from 'react-router'
import userAuth$ from '../ObservablesFiles/UserAuthBehaviourSubject'
import { useState } from 'react'
import { login } from '../Services/APiService'

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginData, setLoginData] = useState({ email: 'john.doe@example.com', password: '' });


  const handleLogin = (e) => {
      e.preventDefault();
    // console.log('Login button clicked');
    // userAuth$.next({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
     
    login(loginData.email, loginData.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        userAuth$.next(response.response);
        navigate(location.state?.from?.pathname || '/', { replace: true });
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  
  }

 const handleUpdateLoginObject =(e)=>{
  setLoginData({ ...loginData, [e.target.id]: e.target.value });
 }

  return (
    <div>
      <h1>Login Page</h1>
      button to login will go here
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" 
          value={loginData.email}
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
