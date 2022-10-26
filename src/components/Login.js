import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const { logIn, signInWithGoogle, signInWithGitHub, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handlePasswordReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Please check email, reset your email password");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login !!!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={(event) => setUserEmail(event.target.value)}
                type="email"
                name="email"
                placeholder="email"
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
              <label className="label">
                <Link
                  onClick={handlePasswordReset}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mb-6 mx-8">
            <button onClick={handleGoogle} className="btn btn-primary">
              <FaGoogle></FaGoogle> Login via Google
            </button>
          </div>
          <div className="form-control mb-6 mx-8">
            <button onClick={handleGitHub} className="btn btn-primary">
              <FaGithub></FaGithub> Login via GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
