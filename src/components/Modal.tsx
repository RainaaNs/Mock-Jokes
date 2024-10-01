import React from 'react'

interface ModalProps {
    isVisible: boolean; 
    onClose: () => void; 
  }

const Modal: React.FC<ModalProps>  = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center pl-[50px] py-[50px] z-10'>
        <div className='flex flex-col border rounded-[20px] px-[40px] py-[30px] bg-white'>
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
            <div className='flex flex-row-reverse justify-between px-10 py-[30px]'>
                <div className=''>
                    <button className='text-white bg-activeNav text-center flex items-center px-6 py-3 font-bold rounded-[10px]'>
                        Add Joke
                    </button>
                </div>
                
                <div>
                    <button
                    onClick={onClose}
                    className="absolute top-16 right-[370px] text-xl text-gray-400"
                    >
                    &times;
                    </button>
                    <button className="border-activeNav border text-black px-4 py-2 rounded-lg" onClick={onClose}>
                    Close Modal
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal




