import { Fragment } from "react";
import SignInForm from "../sign_in_form/sign_in_form";
import './authentication.styles.scss'
import SignUpForm from "../sign_up_form/sign_up_form";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  console.log('authentication')
  return (
    <Fragment>
      <Outlet/>
      <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
      </div>
    </Fragment>
  );
};

export default Authentication;