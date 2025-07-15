import React, {useState} from "react";
import Card from "./Card.jsx";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Testimonial(props) {
    let reviews = props.reviews;

    const [id , setId] = useState(0);

    function leftShiftHandler(){
        if(id === 0){
            setId(reviews.length-1);
        }
        else{
            setId(id-1);
        }
    }

    function rightShiftHandler(){
        if(id === reviews.length-1){
            setId(0);
        }
        else{
            setId(id+1);
        }
    }

    function surpriseMeHandler(){
        let rand = Math.floor(Math.random()*reviews.length);
        setId(rand);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700
                        hover:shadow-2xl">
            <Card review={reviews[id]} />

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
                <button onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronLeft />
                </button>
                <button onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button onClick={surpriseMeHandler}
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-6">
                    Surprise Me
                </button>
            </div>
        </div>

    )
}

export default Testimonial;