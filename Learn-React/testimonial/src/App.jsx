import React from 'react';
import {reviews} from './assets/data.js'
import './App.css'
import Testimonial from "./components/Testimonial.jsx";

function App() {

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-1 w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  )
}

export default App
