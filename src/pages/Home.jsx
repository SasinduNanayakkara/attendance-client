import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Checkbox } from 'antd';
import { submitForm } from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import bgImage from "../images/bg-1.jpg";


function Home() {
  const [showFields, setShowFields] = useState(false);
  const [name, setName] = useState('');
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const handleMemberChange = (index, e) => {
    const value = e.target.value;
    setMembers(prevMembers => {
      const updatedMembers = [...prevMembers];
      updatedMembers[index] = value;
      return updatedMembers;
    });
  };

  const addMemberField = () => {
    if (members.length < 4) {
      setMembers([...members, '']);
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setShowFields(checked);
    if (checked && members.length === 0) {
      setMembers(['']);
    } else if (!checked) {
      setMembers([]);
    }
  };

  const handleSubmit = async () => {
    const category = members.length > 0 ? "Family" : "Single";
    const formattedMembers = members
      .filter(m => m.trim() !== "")
      .map(member => ({ name: member }));

    const formData = {
      name,
      category,
      members: formattedMembers,
    };

    try {
      const response = await submitForm(formData);
      console.log("Form submitted successfully:", response?.data?.name);
      if (response?.data?.name) {
        if (response?.data?.category === "Family") {
          navigate("/invitation", { state: { inviteeName: response.data.name + " & Family"  } });
        } else if (response?.data?.category === "Single") {
          navigate("/invitation", { state: { inviteeName: response.data.name } });
        } else {
          alert("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className="relative z-10 bg-white/50 backdrop-blur-md rounded-3xl p-10 w-[90%] max-w-2xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-4xl sm:text-7xl font-bold text-center font-wedding bg-gradient-to-r from-[#4C291E] via-[#FFB22C] to-[#4C291E] text-transparent bg-clip-text">We look forward to your confirmation</h1>
        </div>
        <div>
          <div className='px-10'>
            <p className="text-center font-wedding text-2xl sm:text-4xl mt-6  text-[#976000]">Please confirm your attendance by October 29, 2025, to ensure everything is as we have dreamed.</p>
            <p className="text-center font-wedding text-3xl sm:text-4xl mt-6 text-[#976000] font-bold">Help us plan the perfect day</p>
          </div>
          <div className="flex flex-col justify-center items-center xl:w-full gap-8">
            <div className="mt-10 flex flex-col justify-center w-full sm:w-11/12 xl:w-3/4">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-[#976000] text-left ml-1 font-date">
                Name
              </label>
              <Input 
                id="first_name"
                placeholder="Enter your Name" 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="flex items-center">
              <Checkbox id="link-checkbox" onChange={handleCheckboxChange} />
              <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-[#976000] font-date">
                Are you with your Family.
              </label>
            </div>
            {showFields && (
              <div className="w-full sm:w-11/12 xl:w-3/4 flex flex-col gap-4">
                {members.map((member, index) => (
                  <Input
                    key={index}
                    placeholder={`Family Member ${index + 1}`}
                    value={member}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                ))}
                {members.length < 4 && (
                  <Button type="dashed" className='text-[#976000] font-date' onClick={addMemberField} icon={<PlusOutlined />}>
                    Add another member
                  </Button>
                )}
              </div>
            )}
            <div className="xl:w-1/2 sm:w-full">
              <button
                onClick={handleSubmit} 
                className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-xl hover:scale-105 font-date transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;