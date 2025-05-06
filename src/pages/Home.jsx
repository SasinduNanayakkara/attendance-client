import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Checkbox } from 'antd';
import { submitForm } from '../api/api.js';
import { useNavigate } from 'react-router-dom';

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
        backgroundImage: `url('https://png.pngtree.com/background/20250316/original/pngtree-pink-and-purple-flowers-with-bokeh-background-perfect-for-wedding-invitations-picture-image_15775464.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-[#FDB7EA]/80 p-4 shadow-lg rounded-lg xl:w-1/2 md:w-11/12 flex flex-col justify-center gap-y-10">
        <div>
          <h1 className="text-6xl font-bold text-center font-wedding text-[#7D1C4A]">Sasindu & Sanduni</h1>
        </div>
        <div>
          <p className="text-center text-2xl font-bold">Please confirm your participation</p>
          <div className="flex flex-col justify-center items-center xl:w-full gap-8">
            <div className="mt-10 flex flex-col justify-center w-full sm:w-11/12 xl:w-3/4">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 text-left ml-1">
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
              <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900">
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
                  <Button type="dashed" onClick={addMemberField} icon={<PlusOutlined />}>
                    Add another member
                  </Button>
                )}
              </div>
            )}
            <div className="xl:w-1/2 sm:w-full">
              <Button 
                type="primary" 
                size="large" 
                onClick={handleSubmit} 
                className="w-full bg-[#7D1C4A]"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;