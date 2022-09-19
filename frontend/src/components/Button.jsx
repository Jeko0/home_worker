import React from 'react'
import {useSelector} from "react-redux"
import { selectCurrentUser } from '../store/user/user.select';
import { useNavigate } from "react-router-dom";

export const Button = ({bgColor, color, size, text, borderRadius}) => {
  const currenUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const redirectUser = () => {
    currenUser ? navigate(`${currenUser.id}/profile`) : navigate("/auth")
  }

  return (
    <button type="button"
    style={{backgroundColor: bgColor, color, borderRadius}}
    className={`text-${size} px-4 py-1 hover:drop-shadow-xl`}
    onClick={redirectUser}>
      {text}
    </button>
  )
}
