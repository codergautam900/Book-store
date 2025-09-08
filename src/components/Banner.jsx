import React from 'react'
import banner from "../../src/assets/bookstore.png"
const Banner = () => {
  return (<>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className="w-full order-2 md:order-1 md:w-1/2  mt-12 md:mt-32">
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold'> Hello, welcomes 
      here to learn 
      something <span className='text-pink-500'> new everyday!!!
         </span> </h1>
    <p className="text-xl ">
      "Every journey starts with an idea, and every idea begins with a book. At Bookstore, discover stories that inspire, knowledge that empowers, and pages that open doors to endless possibilities."

    </p>
    
    <label className=" px-3 py-2 border rounded-md flex items-center gap-2 w-full max-w-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 opacity-70"
  >
    <path
      fillRule="evenodd"
      d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 
         2.25v10.5a2.25 2.25 0 01-2.25 2.25H3.75a2.25 2.25 0 
         01-2.25-2.25V6.75zm2.288-.53a.75.75 0 00-1.076 
         1.06l8.25 8.25a.75.75 0 001.076 0l8.25-8.25a.75.75 
         0 00-1.076-1.06L12 14.689 3.788 6.22z"
      clipRule="evenodd"
    />
  </svg>
  <input
    type="email"
    placeholder="Enter your email to login"
    className="outline-none"
  />
</label>
        </div>
        <button className="mt-6 btn btn-secondary">Secondary</button>
    </div>
    <div className="order-1 w-full md:w-1/2">
    <img src={banner} className="w-92 h-92" alt="" />
    
    
    </div>

  </div>
  
  </>
    
  )
}

export default Banner;
