import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../routes/form_input/form_imput";
import './sign_in_form.styles.scss'
import { setCurrentUser } from "../../store/user/user.action";
import { signInUser } from "../../apis/user.api";
import { useNavigate } from "react-router-dom";
import { setAccessToken
 } from "../../store/user/user.action";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [errors, setErrors] = useState([]);


  const handleCloseAlert = (deleteError) => {
    const leftErrors = errors.filter((error) => error != deleteError)
    setErrors(leftErrors);
  }

  const handleErrorsMessage = (responseErrors) => {
    const array = Object.keys(responseErrors);
    const result = array.map((key) => (`${key} `+ responseErrors[key]))
    setErrors(result);
  }

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUser(formFields).then((response) => {
      const {user, access_token} = response.data || {}
         if (user && access_token){
           dispatch(setCurrentUser(user));
           dispatch(setAccessToken(access_token));
           navigator('/');
         } else {
           handleErrorsMessage(response.data)
         }
    });
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

export default SignInForm;