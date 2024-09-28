import { useRef } from "react";

export default function Login() {
 const email  = useRef();
 const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log();
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email"
          name="email" 
          ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>please provide a vlide email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
          id="password"
          type="password" 
          name="password"
          value={inputChange.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
