import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../store/action-creators";
import { UserLoginRequest } from "../../../store/airports/types";

// Interface for formstate
interface formState {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<formState>({ email: "", password: "" });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get user data from form.
    const user: UserLoginRequest = form;

    dispatch(loginUser(user));
    setForm({ email: "", password: "" });
  };

  const handleEmailFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value });
  };

  const handlePasswordFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, password: e.target.value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 text-center">
          <h1>Please sign in</h1>
          <p>
            Please sign in with username and password to start using this
            fantastic service!
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 ">
          <form className="border p-3" onSubmit={handleOnSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                onChange={handleEmailFieldChange}
                value={form.email}
                type="email"
                className="form-control"
                id="emailInput"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={handlePasswordFieldChange}
                value={form.password}
                className="form-control"
                id="password"
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                <button className="btn btn-outline-primary">Login</button>
              </div>
            </div>
            <div className="row mt-4">
              <p>
                Don't have an account yet? <Link to="/signup">Signup here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
