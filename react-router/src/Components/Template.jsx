import React from 'react'
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
    return (
        <div>

            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === "signup" ?  <SignupForm setIsLoggedIn={setIsLoggedIn} />  : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign in with Google</p>
                </button>

            </div>

            <div>
                <img src={image} alt="Photo" width={558} height={490} loading="lazy"/>
            </div>

        </div>
    )
}
export default Template
