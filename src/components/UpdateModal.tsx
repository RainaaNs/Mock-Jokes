import React from 'react'

interface UpdateModalProps {
    isVisible: boolean; 
    onClose: () => void; 
  }

const UpdateModal: React.FC<UpdateModalProps>  = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center pl-[50px] py-[50px] z-10'>
        <div className='flex flex-col border rounded-[20px] px-[40px] pb-[30px] justify-end h-[530px] w-1/2 bg-white'>

            <div>
                <span className='text-[25px] opacity-50'>Edit Joke</span>
            </div>

            {/* input fields */}
            <div className='flex flex-col mt-[50px] space-y-6'>

                {/* joke title */}
                <div className='w-full h-[79px] border border-gray-300 rounded-[14px] flex items-center'>
                    <textarea
                    name='title'
                    placeholder='Joke Title'
                    className='focus:outline-none px-6 text-base text-wrap w-full resize-none bg-transparent'
                    />
                </div>
                
                {/* joke content */}
                <div className='w-full h-[142px] border border-gray-300 rounded-[17px] py-4'>
                    <textarea
                    name='title'
                    placeholder='Joke Body'
                    className='focus:outline-none px-6 text-base text-wrap w-full h-full resize-none bg-transparent'
                    />
                </div>
            </div>
            <div className='flex flex-row-reverse justify-between md:gap-0 px:5 md:px-8 py-[30px]'>
                <div>
                    <button className='text-white bg-activeNav text-center flex items-center justify-center p-2 md:px-6 md:py-3 font-bold rounded-[10px]'>
                        Update Joke
                    </button>
                </div>
                
                <div>
                    <button className="border-activeNav border p-2 md:px-6 md:py-3 rounded-lg" onClick={onClose}>
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateModal;