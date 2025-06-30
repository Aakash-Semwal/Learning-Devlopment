import React, {useState} from "react";
import Card from "./Card.jsx";

const Cards = ({courses , category}) => {

    const [likedCourses, setLikedCourses] = useState([]);

    let allCourses = [];
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((course) => {
                course.forEach((item) => {
                    allCourses.push(item);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                return <Card course={course}
                             key={course.id}
                             likedCourses={likedCourses}
                             setLikedCourses={setLikedCourses}/>
             })
            }
        </div>
    )
}

export default Cards;