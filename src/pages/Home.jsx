import React, { useState } from 'react'

function Home() {
  const [showFields, setShowFields] = useState(false);
  const [name, setName] = useState('');
  const [members, setMembers] = useState(['', '', '', '']);

  const handleMemberChange = (index, value) => {
    setMembers(prevMembers => {
      const updatedMembers = [...prevMembers];
      updatedMembers[index] = value;
      return updatedMembers;
    });
  };

  console.log("members - ", members);

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white p-4 shadow-lg rounded-lg xl:w-1/2 md:11/12 flex flex-col justify-center gap-y-10'>
        <div>
          <h1 className='text-4xl font-bold text-center'>Home Page</h1>
        </div>
        <div>
          <p className='text-center text-2xl'>Welcome to the Home Page</p>
          <div className='flex flex-col justify-center items-center xl:w-full gap-8'>
            <div className='mt-10 flex flex-col justify-center w-full sm:w-11/12 xl:w-3/4'>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 text-left ml-1">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 block w-full" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="flex items-center">
              <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" onChange={(e) => setShowFields(e.target.checked)} />
              <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900">Are you with your Family.</label>
            </div>
            {showFields && (
              <div className='w-full sm:w-11/12 xl:w-3/4 flex flex-col gap-4'>
                {members.map((member, index) => (
                  <input
                    key={index}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 block w-full"
                    placeholder={`Family Member ${index + 1}`}
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                  />
                ))}
              </div>
            )}
            <div className='xl:w-1/2 sm:w-full'>
              <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center w-full">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home