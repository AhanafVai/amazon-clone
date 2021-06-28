//* Imports & Dependencies
import React, { useCallback, useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import app from "../firebase";
import Logo from "../../../Assets/Image/amazon-logo (black-version).png";

const Login = ({ history }) => {
  //? current user from firebase
  const { currentUser } = useContext(AuthContext);
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  //? prevent can not read property error
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center bg-light"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <span className="d-flex justify-content-center mb-3">
          <img style={{ width: "150px" }} src={Logo} alt="" />
        </span>
        {/* Form section */}
        <form
          onSubmit={handleLogin}
          className="card p-2"
          style={{ width: "24rem" }}
        >
          <div className="card-body">
            <h1 className="card-title mb-3">Sign-In</h1>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <b> Email address</b>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <b> Password</b>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-warning">
              Sign In
            </button>
            <p className="pt-4 text-muted">
              <small>
                By continuing, you agree to Amazon's{" "}
                <a
                  className="text-decoration-none"
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088"
                >
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a
                  className="text-decoration-none"
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"
                >
                  Privacy Notice.
                </a>
              </small>
            </p>
            <p>
              New to Amazon? <Link to="/signup">Create your account</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
