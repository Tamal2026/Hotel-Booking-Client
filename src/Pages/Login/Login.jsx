import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Components/Provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";
import HelmetReact from "../../Components/Helmet/HelmetReact";

const Login = () => {
  const naviGate = useNavigate();

  const { signIn, user } = useContext(AuthContext);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        axios
          .post(
            "http://localhost:5000/jwt",
            { token, fromGoogle: true },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              naviGate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => console.error(error));
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = {
      email,
      password,
    };
    console.log(loginUser);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              naviGate(location?.state ? location.state : "/");
            }
          });
      })
      .catch((error) => console.error(error));
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <div>
        <HelmetReact title="Login"></HelmetReact>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="mt-4  items-center justify-evenly">
                  <p>Sign In With:</p>
                  <div>
                    <button
                      onClick={googleSignIn}
                      className="mt-2 bg-red-500 text-white px-2 py-1 rounded-lg"
                    >
                      Google
                    </button>
                  </div>
                </div>

                <p className="mt-5">
                  New Here? Please{" "}
                  <span className="font-bold text-green-500">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
