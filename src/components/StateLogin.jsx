import { useState } from "react";
import Input from "./input.jsx";

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
  const passwordIsInvalid = didEdit.password && inputChange.password.trim().length < 6;

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
        <Input 
        label="email"
        id="email" 
        name="email" 
        onBlur={() => handleBlur('email')} 
        onChange={(event) => handleInputChange('email',event.target.value)}
        value={inputChange.email} 
        error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input 
        label="password"
        id="password" 
        name="password" 
        onBlur={() => handleBlur('password')} 
        onChange={(event) => handleInputChange('password',event.target.value)}
        value={inputChange.password} 
        error={passwordIsInvalid && 'Please enter a valid password! '}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
