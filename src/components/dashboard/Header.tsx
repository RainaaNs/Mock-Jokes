import React from 'react';
import { FaUserAlt } from "react-icons/fa";



const Header = () => {
  return (
    <div className='pt-5 flex justify-end px-[50px]'>
      {/* <div className="flex flex-row">
        <input 
            type="search" 
            name="search" 
            placeholder="Search Here" 
            className="bg-searchColor shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] text-gray-600 h-[47px] pl-12 pr-10 rounded-full border focus:outline-none"
        />
            <button type="submit" className="opacity-50 absolute top-8 pl-[15px]">
              <CiSearch/>
            </button>
      </div>   */}

            {/* admin profile */}
      <div className="flex flex-row space-x-3">
        <div className='rounded-full border-activeNav border-[1px] w-[50px] h-[50px] flex items-center justify-center'>
          <FaUserAlt/>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold text-base'>Welcome, Admin</span>
          <span className='text-sm'>ID: 224-56789-4</span>
        </div>
      </div>

    </div>
  )
}

export default Header