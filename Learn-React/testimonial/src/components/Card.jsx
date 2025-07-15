import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Card(props) {
    let review = props.review ;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute -top-28 z-10 mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-23"
                    src={review.image}/>
                <div className="bg-violet-500 absolute top-[-6px] left-[10px] -z-2 rounded-full w-[140px] h-[140px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
            </div>

            <div className="text-center mt-1">
                <p className="text-violet-300 uppercase">{review.job}</p>
            </div>

            <div className="mx-auto mt-7 text-violet-400">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>
            <div className="mx-auto mt-7 text-violet-400">
                <FaQuoteRight/>
            </div>

        </div>
    )
}

export default Card;