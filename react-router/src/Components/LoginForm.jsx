import React, {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("You have successfully logged in.");
        navigate("/dasboard")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>

                <input
                    required
                    type="email"
                    value={formdata.email}
                    onChange={changeHandler}
                    placeholder="Email Address"
                    name="email"
                />
            </label>

            <label>
                    <p>
                        Password<sup>*</sup>
                    </p>

                <input
                    required
                    type={showPassword ? "text" : 'password'}
                    value={formdata.password}
                    onChange={changeHandler}
                    placeholder="Password"
                    name="password"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to="#">
                    <p>
                        Forgot password
                    </p>
                </Link>

            </label>

            <button>
                Sign In
            </button>

        </form>
    )
}
export default LoginForm
