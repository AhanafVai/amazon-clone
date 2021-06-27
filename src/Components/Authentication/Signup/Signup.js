import React, { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Image/amazon-logo (black-version).png";
import app from "../firebase";

const Signup = ({ history }) => {
  const [error, setError] = useState(null);
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, cpassword } = event.target.elements;

      if (password.value !== cpassword.value) {
        setError("Password didn't match");
      } else {
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }
    },
    [history]
  );

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center bg-light"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <span className="d-flex justify-content-center mb-3">
          <img style={{ width: "150px" }} src={Logo} alt="" />
        </span>
        <form
          onSubmit={handleSignUp}
          className="card p-2"
          style={{ width: "24rem" }}
        >
          <div className="card-body">
            <h1 className="card-title mb-3">Create account</h1>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}

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
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                <b> Re-enter password</b>
              </label>
              <input
                name="cpassword"
                type="password"
                className="form-control"
                id="cpassword"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning">
              Create your Amazon account
            </button>
            <p className="pt-4">
              <small>
                By creating an account, you agree to Amazon's{" "}
                <a
                  className="text-decoration-none"
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088"
                >
                  Conditions of Use
                </a>{" "}
                and
                <a
                  className="text-decoration-none"
                  href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496"
                >
                  Privacy Notice.
                </a>
              </small>
            </p>
            <p>
              Already have an account? <Link to="/login"> Sign-In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
