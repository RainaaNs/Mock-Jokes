import React from 'react'

interface DeleteModalProps {
    isVisible: boolean; 
    onClose: () => void; 
  }

const DeleteModal: React.FC<DeleteModalProps>  = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center pl-[50px] py-[50px] z-10 items-center'>
        <div className='flex flex-col border h-[220px] rounded-[20px] px-[40px] py-[30px] justify-between bg-white'>
            <div className='w-full flex justify-center text-center text-[20px]'>
                <p>Are you sure you want to<br></br> delete this joke?</p>
            </div> 
           
            <div className='flex flex-row-reverse items-center justify-between w-full gap-2 px-9 py-[30px]'>
                <div>
                    <button 
                    className='border border-black text-center items-center px-4 py-[7px] font-semibold rounded-[5px] text-[14px]'
                    onClick={onClose}>
                        No, I'm not
                    </button>
                </div>
                
                <div>
                    <button className="bg-activeNav border text-white px-4 py-2 rounded-[5px] text-[14px] font-semibold" onClick={onClose}>
                    Yes, I'm sure
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DeleteModal;