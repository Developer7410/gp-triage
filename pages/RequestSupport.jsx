import React from 'react';
import Image from 'next/image';
const RequestSupport = () => {
  return (
  <>
  <div
        className="pt-10 pl-8 pr-16 bg-[#f1f4fa] flex flex-col gap-12 "
       
      >
            <h2 className='lg:text-2xl md:text-xl text-md font-[600]'>Request Support</h2>

        <div className="flex md:flex-row flex-col md:gap-20 gap-10 items-center">
          <div className="lg:p-10 p-5 rounded-[10px] bg-[#e7ecf2] flex flex-col gap-3 md:w-[70%] w-[100%]">
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Name:
              </label>
              <input
                type="text"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Email:
              </label>
              <input
                type="email"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Phone:
              </label>
              <input
                type="tel"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Message:
              </label>
              <textarea className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] h-[216px] outline-none" />
            </div>
            <div>

            <button type="button" className="dashborad-btn py-3 px-8  me-2 mb-2 text-xs text-[#0B132B] focus:outline-none bg-[#9BD4E3] rounded-full border border-gray-200 hover:bg-[#9bd5e3da] ">Submit</button>
            </div>

          </div>
          <div className='pb-8 md:pb-0'>
            <Image src='/images/blur-logo.svg' alt="ViewCrunch" layout="responsive" width={100} height={50}  />
          </div>
        
        </div>
      
      </div>
  </>
  
    )
}

export default RequestSupport