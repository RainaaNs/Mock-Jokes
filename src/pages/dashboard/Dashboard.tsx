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
      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 xl:space-x-2 pt-[20px]'>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Total Number of Jokes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[58px] xl:text-[64px] text-activeNav'>5,000</span><span className='opacity-50'>In Database</span>
          </div>
        </div>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={love} alt="crown"/>
              </div>
            </span><span>Total Number of Likes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[58px] xl:text-[64px] text-activeNav'>5,000</span><span className='opacity-50'>Overall</span>
          </div>
        </div>

        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={love} alt="crown"/>
              </div>
            </span><span>Total Number of Dislikes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[58px] xl:text-[64px] text-activeNav'>5,000</span><span className='opacity-50'>Overall</span>
          </div>
        </div>
        <div className='flex flex-col justify-between border-t-[1px] border-activeNav h-[262px] rounded-[30px] shadow-2xl p-6'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={heartbreak} alt="crown"/>
              </div>
            </span><span>Total Number of Admins</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[58px] xl:text-[64px] text-activeNav'>1</span><span className='opacity-50'>Overall</span>
          </div>
        </div>
      </div>
      
        {/* separator */}
      <div className='border-t-[1px] opacity-100 mt-[10px]'></div>

      {/* second parent grid */}
      <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-7 pt-[30px]'>
        <div className='flex flex-col h-[227px] xl:w-auto md:w-5/6 rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Average Number of Likes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[62px] xl:text-[64px] text-activeNav'>500</span><span className='opacity-50'>Overall</span>
          </div>
        </div>

        <div className='flex flex-col h-[227px] xl:w-auto md:w-5/6 pl-[30px] rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Average Number of DisLikes</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[62px] xl:text-[64px] text-activeNav'>500</span><span className='opacity-50'>Overall</span>
          </div>
        </div>

        <div className='flex flex-col h-[227px] xl:w-auto md:w-5/6 rounded-[30px] shadow-2xl p-6 border-t-[1px] border-activeNav'>
          <div className='flex flex-col opacity-50'>
            <span>
              <div className='bg-stone-200 w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                <img src={crown} alt="crown"/>
              </div>
            </span><span>Number of Registered Users</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[66px] md:text-[62px] xl:text-[64px] text-activeNav'>500</span><span className='opacity-50'>In Database</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard