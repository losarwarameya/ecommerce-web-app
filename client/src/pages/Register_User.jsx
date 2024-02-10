import React from "react";

const Register_User = () => {
  return (
    <div>
      <h1>Register User</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="first_name" />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="last_name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phone_number" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h3>
        Already have an account? <a href="/login">Login</a>
      </h3>
    </div>
  );
};

export default Register_User;
