import React from 'react'
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex justify-evenly">

            <Link to="/">
                <div className="w-[160px] h-[32px] text-center text-lg">LOGO</div>
            </Link>

            <nav>
                <ul className="flex flex-wrap gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-wrap gap-4 mx-3">
                { !isLoggedIn &&
                    <Link to="/Login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/SignUp">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Log in successfully");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/Dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}
export default Navbar
