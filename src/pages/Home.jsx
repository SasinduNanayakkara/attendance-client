import React from 'react'

function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white p-4 shadow-lg rounded-lg xl:w-1/2 md:11/12 flex flex-col justify-center gap-y-10'>
        <div className=''>
          <h1 className='text-4xl font-bold text-center'>Home Page</h1>
        </div>
        <div>
          <p className='text-center text-2xl'>Welcome to the Home Page</p>
          <div className='flex flex-col justify-center items-center xl:w-full gap-8'>
            <div className='mt-10 flex flex-col justify-center w-full sm:w-11/12 xl:w-3/4'>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 text-left ml-1">First name</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 block" placeholder="Enter your Name" required />
            </div>
            <div className='xl:w-1/2 sm:w-full'>
              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home