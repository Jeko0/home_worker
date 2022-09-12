import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import './home.styles.scss'


const Home = () => {
  console.log('home')
  return (
    <Fragment>
      <Outlet/>
      <div className="home-container">
        <h1> Hello </h1>
      </div>
    </Fragment>
  )
}

export default Home;