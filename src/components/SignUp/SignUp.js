import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser, nameAndPhoto } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;
    const name = form.name.value;

    console.log(email, password, confirm, name, photo);

    if (password.length < 6) {
      setError("password should be 6 characters or more.");
      return;
    }
    if (password !== confirm) {
      setError("password did not match");
      form.reset();
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        nameAndPhoto(name, photo).then(alert("photo and name updated")).catch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="photo">Photo link</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter Your Photo link"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="enter Your secrete password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm password "
            required
          />
        </div>
        <p>{error}</p>
        <input type="submit" className="btn-submit" value="Sign Up" />
      </form>
      <p className="login-signup">
        Already have an Account?
        <Link className="create-new-account" to={"/login"}>
          <span> Login</span>
        </Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
