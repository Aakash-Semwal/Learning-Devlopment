import React from 'react'
import Template from "../Components/Template.jsx";

const Login = (props) => {

    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <Template
            title = "Welcome Back"
            desc1 = "Build Skills for today, tomorrow and beyond"
            desc2 = "Education to future-proof your career"
            image = "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg"
            formtype = "login"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Login
