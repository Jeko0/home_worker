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
  const [errors, setErrors] = useState([]);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  }

  const handleCloseAlert = (deleteError) => {
    const leftErrors = errors.filter((error) => error != deleteError)
    setErrors(leftErrors);
  }

  const handleErrorsMessage = (responseErrors) => {
    const array = Object.values(responseErrors);
    setErrors(array);
   }

  const handleSubmit = async (event) => {
    event.preventDefault();
      try{
        signUpUser(formFields).then((response) => {
         const {user, access_token} = response.data || {}
         if (user && access_token){
           dispatch(setCurrentUser(user));
           dispatch(setAccessToken(access_token));
           navigator('/');
         } else {
           handleErrorsMessage(response.data)
         }
       })
      } catch(error) {
        console.log('errors:', errors);
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
      {
        errors ? (
          <div className="flex flex-col space-y-5 ">
          {errors.map((error) => (
            <div className="alert-toast flex float-left bottom-0 mt-8 w-5/6 md:w-full max-w-sm" onClick={() => handleCloseAlert(error)}>
              <label className="close cursor-pointer flex items-start justify-between w-full p-2 bg-red-600 h-24 rounded shadow-lg text-black" title="close">
                {error}
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </label>
            </div>
          )
          )}
          </div>
        ) : ( <></>)
      }
    </div>
  );  
}

export default SignUpForm