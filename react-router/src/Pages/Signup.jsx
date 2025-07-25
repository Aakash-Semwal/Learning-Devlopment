import React from 'react'
import Template from "../Components/Template.jsx";

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
            title = "Join the millions learning to code with StudyNotion for free"
            desc1 = "Build Skills for today, tomorrow and beyond"
            desc2 = "Education to future-proof your career"
            image = "https://images.pexels.com/photos/7688361/pexels-photo-7688361.jpeg"
            formtype = "signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup
