import {  useState } from "react";
import { useDispatch } from "react-redux";
import {setCurrentUser, setAccessToken} from '../../store/user/user.action'
import FormInput from "../../routes/form_input/form_imput";
import { signUpUser } from "../../store/user/user.api";
import './sign_up_form.style.scss'
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, password_confirmation} = formFields;
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       signUpUser(formFields).then((response) => {
        const {user, access_token } = response.data;
        dispatch(setCurrentUser(user));
        dispatch(setAccessToken(access_token));
      })
      navigator('/');
    } catch(error) {
      console.log(error)
    }
   
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  }

  return (
    <div className="sign-up-container">
      <h2> Sign up form</h2>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label='username'
          type='text' 
          onChange={ handleChange } 
          name='username' 
          value={ username } 
          required
        />

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

        <FormInput
          label='confirm Password'
          type='password' 
          onChange={ handleChange } 
          name='password_confirmation' 
          value={ password_confirmation } 
          required
        />

        <button type='submit' className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" > sign up </button>
      </form>
    </div>
  );  
}

export default SignUpForm