import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../routes/form_input/form_imput";
import './sign_in_form.styles.scss'
import { setCurrentUser } from "../../store/user/user.action";
import { signInUser } from "../../store/user/user.api";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUser(formFields).then((response) => {
      const { user, access_token} = response.data;
      console.log(user)
      dispatch(setCurrentUser(user));
    });

    navigate('/');
  }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  }

  return (
    <div className="sign-in-container">
      <h2> Sign in form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email' 
          onChange={ handleChange } 
          name='email' 
          value={ email } 
          required
        />

        <FormInput
          label='Password'
          type='password' 
          onChange={ handleChange } 
          name='password' 
          value={ password } 
          required
        />
        <div className="buttons-container">
        <button type="submit" className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">sign in</button>
    
        </div>
      </form>
    </div>
  );  
}

export default SignInForm;