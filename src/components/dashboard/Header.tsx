import React from 'react';
import admin from '../../assets/Admin.svg';



const Header = () => {
  return (
    <div className='pt-5 flex justify-end mr-[90px] md:mr-[70px] xl:mr-[50px]'>
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
      <div className="flex flex-row space-x-3 items-center">
        <div className='w-[40px] h-[40px] '>
          <img src={admin}  alt="admin"/>
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