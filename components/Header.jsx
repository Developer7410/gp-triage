import React from "react"
import {  DatePicker } from '../node_modules/antd/dist/antd';

const Header = () => {
      // Header Date Change function
 const onChange = (date, dateString) => {
  console.log(date, dateString);
};
  return (
    <>
   
    <div className='flex flex-col sm:flex-row sm:justify-between md:px-5 px-4 pt-7'>
    <h2 className='lg:text-2xl md:text-xl text-md font-[600]'>GP Triage Dashboard</h2>
   

    <div className="flex md:gap-3 gap-1 items-center me-1 pt-2 sm:pt-0">
            {/* Date Selectors */}
            <DatePicker onChange={onChange} className="md:py-1.5 px-1 md:px-2" />
            <DatePicker onChange={onChange} className="md:py-1.5 px-1 md:px-2" />
          </div>
   
    </div>
   

    </>
    
      )
}

export default Header