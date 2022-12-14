import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const {
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    signInWithGitHub,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(createUser);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      toast.error("Please provide minimum two upper case", { autoClose: 3000 });
      return;
    }
    if (password.length < 6) {
      toast.error("Should be at least 6 character", { autoClose: 3000 });
      return;
    }
    if (!/(?=.*[!@#$&*%])/.test(password)) {
      toast.error("Please should be at least 1 special character", {
        autoClose: 3000,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });

        updateName(name)
          .then(() => {
            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification");
                navigate(from, { replace: true });
              })
              .catch((error) => {
                toast.error(error.message);
              });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
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
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
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

export default Register;
