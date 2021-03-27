import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../store/action-creators";
import { SignupUserInfo } from "../../../store/airports/types";

interface formState {
  userName: string;
  email: string;
  password: string;
}

export const SignupPage: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<formState>({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create newUser that matches Signupuserinfo object
    const newUser: SignupUserInfo = {
      displayName: form.userName,
      email: form.email,
      password: form.password,
    };

    dispatch(signupUser(newUser));
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, userName: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: e.target.value });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 text-center">
          <h1>Register new user</h1>
          <p>Please fill out form below to register for this service</p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 border">
          <form className="p-3" onSubmit={handleSubmit}>
            <label htmlFor="userNameInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userNameInput"
              placeholder=""
              value={form.userName}
              onChange={handleUserNameChange}
            ></input>
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-3"
              id="emailInput"
              placeholder=""
              value={form.email}
              onChange={handleEmailChange}
            ></input>
            <label htmlFor="passWordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="passWordInput"
              placeholder=""
              value={form.password}
              onChange={handlePasswordChange}
            ></input>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
