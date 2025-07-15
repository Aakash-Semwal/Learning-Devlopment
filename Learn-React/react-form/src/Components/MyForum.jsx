import React, {useState} from "react";

function MyForum() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    //
    // function changeFirstNameHandler(event) {
    //     // console.log(event.target.value);
    //     setFirstName(event.target.value);
    //     console.log(firstName);
    // }
    //
    // function changeLastNameHandler(event) {
    //     // console.log(event.target.value);
    //     setLastName(event.target.value);
    //     console.log(lastName);
    // }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isVisible: false,
        mode: "",
        favCar: "",
    });

    console.log(formData);
    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => (
            {
                ...prevState,
                [name]: type === 'checkbox'? checked : value ,
            }));
    }

    function submitHandler(event) {
        event.preventDefault();
        alert("Form Submitted!");
    }

    return (
        <div className="flex justify-center my-10 h-screen w-screen">
            <form action="" className="flex flex-col items-center" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={changeHandler}
                    name="firstName"
                    value={formData.firstName}
                    className="text"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    name="lastName"
                    value={formData.lastName}
                    className="text"
                />
                <input
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={changeHandler}
                    name="email"
                    value={formData.email}
                    className="text"
                />
                <textarea
                    className="border-2 rounded-md my-2 w-60 bg-zinc-300 p-1 text-emerald-600 border-black"
                    placeholder="Enter your comments here..."
                    onChange={changeHandler}
                    name="comments"
                    value={formData.comments}
                />
                <div className="flex justify-center">
                    <input
                        type="checkbox"
                        onChange={changeHandler}
                        name="isVisible"
                        id="isVisible"
                        checked={formData.isVisible}
                    />
                    <label htmlFor="isVisible">Am i visible ?</label>
                </div>
                <fieldset className="flex justify-center gap-1">
                    <legend>Mode</legend>
                    <input
                        type="radio"
                        onChange={changeHandler}
                        name="mode"
                        value="Online-mode"
                        id="online-mode"
                        checked={formData.mode === "Online-mode"}
                    />
                    <label htmlFor="online-mode">Online Mode</label>
                    <input
                        type="radio"
                        onChange={changeHandler}
                        name="mode"
                        value="Offline-mode"
                        id="offline-mode"
                        checked={formData.mode === "Offline-mode"}
                    />
                    <label htmlFor="offline-mode">Offline Mode</label>
                </fieldset>

                <label htmlFor="favCar">Favorite Car? </label>
                <select
                    onChange={changeHandler}
                    name="favCar"
                    id="favCar"
                    value={formData.favCar}
                    className="border rounded-md"
                >
                    <option value="Scorpio">Scorpio</option>
                    <option value="Porch">Porch</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>

                </select>

                <button className="border border-black rounded-md bg-orange-500 text-white">Submit</button>

            </form>
        </div>
    )
}

export default MyForum ;