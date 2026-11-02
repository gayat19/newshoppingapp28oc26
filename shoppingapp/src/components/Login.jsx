import { useNavigate, useLocation } from 'react-router'
import userAuth$ from '../ObservablesFiles/UserAuthBehaviourSubject'

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {

    console.log('Login button clicked');
    userAuth$.next({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
  
    navigate(location.state?.from?.pathname || '/', { replace: true });
  }
  return (
    <div>
      <h1>Login Page</h1>
      button to login will go here
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>

    </div>
  )
}
