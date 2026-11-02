import userAuth$ from '../ObservablesFiles/UserAuthBehaviourSubject'

export default function Login() {
  const handleLogin = () => {
    // Implement login logic here
    console.log('Login button clicked');
    userAuth$.next({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });

  }
  return (
    <div>
      <h1>Login Page</h1>
      button to login will go here
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      
    </div>
  )
}