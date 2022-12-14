import React from 'react'
import { Link } from 'react-router-dom'
import pro from "../assets/feature_product.png"

function Home() {
    return (
    <div className="flex items-center  flex-col-reverse md:flex-row justify-between mx-10">
        {/* left-side */}
        <div className="md:w-1/2 space-y-5 mt-14 md:mt-0">
          <h2 className="text-2xl">New Products</h2>
          <h1 className="text-6xl">NVIDIA® GeForce RTX™ 4090</h1>
          <p className="text-lg text-gray-500">
          Experience ultra-high performance gaming, incredibly detailed virtual worlds, unprecedented productivity, and new ways to create. It’s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.
          </p>
          <button
            className="bg-orange-600 px-5 text-white hover:text-orange-500 hover:bg-white py-2 shadow transition-all
        duration-500 rounded-md"
          >
            <Link to="/Products">Shop now</Link>
          </button>
        </div>
        {/* right-side */}
        <div>
          <img src={pro} alt="" className="max-w-2xl"/>
        </div>
      </div>
    )
}

export default Home
