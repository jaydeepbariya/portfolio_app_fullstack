import React, { useState } from 'react'
import { contactUs } from '../services/ContactService';

const Contact = () => {

  const [contactData, setContactData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    contactNumber : "",
    message : ""
  });

  const handleChange = (e, field) => {
    setContactData({...contactData, [field] : e.target.value});
  }

  const submitForm = async (e) => {
    e.preventDefault();
    await contactUs(contactData);
    setContactData({
      firstName : "",
      lastName : "",
      email : "",
      contactNumber : "",
      message : ""
    })
  }

  return (
    <div className="w-11/12 mx-auto min-h-content my-12 bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-x-10 mt-[150px]">
        <p className="text-[3rem] font-bold uppercase mt-6">Contact</p>
        <div className="h-[2px] w-[40%] bg-slate-700 my-4"></div>

        <form onSubmit={submitForm} className='w-full flex flex-col text-slate-900'>
          <div className='w-full flex justify-between items-center'>
            <input 
              type='text' 
              placeholder='Enter First Name'
              value={contactData.firstName}
              onChange={(e)=>handleChange(e,"firstName")}
              className='w-[70%] mx-auto my-5 outline-none border-none px-2 py-1'
              />
          </div>

          <div className='w-full flex justify-between items-center'>
            <input 
              type='text' 
              placeholder='Enter Last Name'
              value={contactData.lastName}
              onChange={(e)=>handleChange(e,"lastName")}
              className='w-[70%] mx-auto my-5 outline-none border-none px-2 py-1'
              />
          </div>

          <div className='w-full flex justify-between items-center'>
            <input 
              type='text' 
              placeholder='Enter Email'
              value={contactData.email}
              onChange={(e)=>handleChange(e,"email")}
              className='w-[70%] mx-auto my-5 outline-none border-none px-2 py-1'
              />
          </div>

          <div className='w-full flex justify-between items-center'>
            <input 
              type='text' 
              placeholder='Enter Contact Number'
              value={contactData.contactNumber}
              onChange={(e)=>handleChange(e,"contactNumber")}
              className='w-[70%] mx-auto my-5 outline-none border-none px-2 py-1'
              />
          </div>

          <div className='w-full flex justify-between items-center'>
            <textarea 
              type='text' 
              placeholder='Enter Message'
              value={contactData.message}
              onChange={(e)=>handleChange(e,"message")}
              className='w-[70%] h-[150px] mx-auto my-5 outline-none border-none px-2 py-1'
              ></textarea>
          </div>
          
          <button type='submit' className='max-w-[50%] mx-auto px-2 py-1 rounded-md hover:scale-95 my-4 bg-slate-600 active:shadow-sm active:shadow-white'>Submit</button>
        </form>
      </div>
      </div>
  )
}

export default Contact