import React from "react";

const Login_User = () => {
  return (
    <div>
      <h1>Login User</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h3>
        Don't have an account? <a href="/register">Register</a>
      </h3>
    </div>
  );
};

export default Login_User;
