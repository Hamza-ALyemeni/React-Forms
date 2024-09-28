import { useState } from "react";

export default function Login() {
  const [inputChange, setInputChange]= useState({
    email:'',
    password:''
  });

  const [didEdit, setDidEdit] = useState({
    email:false,
    password:false
  })

  const emailIsInvalid = didEdit.email && !inputChange.email.includes('@');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputChange);
  }

  function handleInputChange(identifers,value) {
    setInputChange((prevInput) => ({
      ...prevInput,
      [identifers]: value
    })
    )
    setDidEdit((prevInput) => ({
      ...prevInput,
      [identifers]: false
    })
    )
  }

  function handleBlur(identifers) {
    setDidEdit((prevInput) => ({
      ...prevInput,
      [identifers]: true
    })
    )
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
          onBlur={() => handleBlur('email')}
          onChange={(event) => handleInputChange('email',event.target.value)} 
          value={inputChange.email}/>
          <div className="control-error">{emailIsInvalid && <p>please provide a vlide email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
          id="password"
          type="password" 
          name="password"
          onChange={(event) => handleInputChange('password',event.target.value)}
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
