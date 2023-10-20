import "./styles.css";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export default function App() {
  const responseGoogleLogin = async (response) => {
    const details = response;

  const details1 = jwtDecode(details.credential);
  console.log(details1);
  };
  const errorGoogleLogin = () => {
    // Handle the error here
    alert("An error occurred during Google login");
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p class="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>login</button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <GoogleLogin
            onSuccess={responseGoogleLogin}
            onError={errorGoogleLogin}
          />
        </div>
      </div>
    </div>
  );
}
