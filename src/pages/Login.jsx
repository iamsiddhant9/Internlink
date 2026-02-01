import "./Login.css";
import AuthLeft from "../components/AuthLeft.jsx";


export default function Login() {
  return (
    <div className="page-center">
    <div className="auth-wrapper">
  
  <div className="auth-left">
  <AuthLeft />
</div>

  <div className="auth-right">
    <div className="login-card">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</div>
</div>
  );
}
