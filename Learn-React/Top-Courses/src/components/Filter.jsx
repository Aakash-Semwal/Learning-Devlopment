import React from "react";

const Filter = ({filterData , category , setCategory}) => {

    function filterHandler(title) {
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data) => (
                    <button
                        className={`text-lg px-2 py-1 rounded-md font-medium
                        text-white bg-black hover:bg-gray-600  border-2
                        hover:cursor-pointer transition-all duration-300 
                        ${
                            category === data.title
                                ? ("border-white bg-gray-800")
                                : (" border-transparent bg-opacity-50")
                        }`}
                        key = {data.id}
                        onClick={() => filterHandler(data.title)}>
                        {data.title}
                    </button>
                ))
            }
        </div>
    );
}

export default Filter;