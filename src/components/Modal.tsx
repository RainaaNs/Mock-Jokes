import React from 'react'

const Modal = () => {
  return (
    <div className='pl-[50px] py-[50px]'>
        <div>
            <span className='text-[25px] opacity-50'>Add Joke</span>
        </div>

        {/* input fields */}
        <div className='flex flex-col mt-[80px] space-y-6'>

            {/* joke title */}
            <div className='w-[592px] h-[79px] border border-gray-300 rounded-[14px] flex items-center'>
                <textarea
                name='title'
                placeholder='Joke Title'
                className='focus:outline-none px-6 text-base text-wrap w-full resize-none bg-transparent'
                />
            </div>
            
            {/* joke content */}
            <div className='w-[592px] h-[142px] border border-gray-300 rounded-[17px] py-4'>
                <textarea
                name='title'
                placeholder='Joke Body'
                className='focus:outline-none px-6 text-base text-wrap w-full h-full resize-none bg-transparent'
                />
            </div>
        </div>

        <div className='py-[30px]'>
            <button className='text-white bg-activeNav text-center flex items-center px-6 py-3 font-bold rounded-[10px]'>
                Add Joke
            </button>
        </div>

    </div>
  )
}

export default Modal




