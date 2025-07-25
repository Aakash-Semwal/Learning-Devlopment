import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();


    const [formdata, setFormdata] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    function changeHandler(e) {
        setFormdata((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();

        if(formdata.password !== formdata.confirmPassword) {
            toast.error("Passwords don't match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    }

    return (
        <div>

            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/*first name last name*/}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="First Name"
                            value={formdata.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Last Name"
                            value={formdata.lastName}
                        />
                    </label>
                </div>

                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        value={formdata.email}
                    />
                </label>

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword1 ? "text" : 'password'}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Password"
                            value={formdata.password}
                        />
                        <span onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword2 ? "text" : 'password'}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formdata.confirmPassword}
                        />
                        <span onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form>

        </div>
    )
}
export default SignupForm
