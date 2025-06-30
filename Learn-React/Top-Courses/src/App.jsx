import './App.css'
import {apiUrl , filterData} from "./assets/data.js";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

function App() {

  const [course, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const opt = await response.json();
        setCourses(opt.data);
      }
      catch(err){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-700">
      <div>
        <Navbar/>
      </div>

      <div className="bg-gray-700">
          <div>
              <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex
       justify-center flex-wrap items-center min-h-[50vh]">
              {
                  loading ? (<Spinner/>) : (<Cards courses={course} category={category}/>)
              }
          </div>
      </div>
      </div>


  )
}

export default App
