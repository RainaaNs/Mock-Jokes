import React from 'react';
import crown from '../../assets/crown.svg';
import heartbreak from '../../assets/heartbreak.svg';
import love from '../../assets/love.svg';

const Dashboard = () => {
  return (
    <div className='px-12 py-[30px]'>

      <div>
        <span className='text-[30px] opacity-50'>Overview</span>
      </div>

      {/* first parent grid */}
      <div className='grid grid-cols-4 space-x-7 pt-[20px]'>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Total number of jokes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>5,000</span><span className='opacity-50'>In Database</span>
          </div>
        </div>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={love} alt="crown"/>
              </div>
            </span><span>Total number of jokes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>5,000</span><span className='opacity-50'>In Database</span>
          </div>
        </div>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={love} alt="crown"/>
              </div>
            </span><span>Total number of jokes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>5,000</span><span className='opacity-50'>In Database</span>
          </div>
        </div>
        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={heartbreak} alt="crown"/>
              </div>
            </span><span>Total number of jokes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>500</span><span className='opacity-50'>In Database</span>
          </div>
        </div>
      </div>
      
        {/* separator */}
      <div className='border-t-[1px] opacity-100 mt-[10px]'></div>

      {/* second parent grid */}
      <div className='grid grid-cols-2 gap-7 pt-[30px]'>
        <div className='flex flex-col h-[227px] rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Average Number of Likes Per Day</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>500</span><span className='opacity-50'>In a Month</span>
          </div>
        </div>

        <div className='flex flex-col h-[227px] rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Average Number of Likes Per Day</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>500</span><span className='opacity-50'>In a Year</span>
          </div>
        </div>

        <div className='flex flex-col h-[227px] rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Number of Registered Users</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[74px] text-activeNav'>500</span><span className='opacity-50'>In Database</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard