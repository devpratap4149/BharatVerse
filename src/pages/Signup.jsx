import React from "react";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <form>
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="password" placeholder="Password" required />

          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;