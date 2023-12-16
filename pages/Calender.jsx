import { useState, useEffect } from "react";
import Image from 'next/image';
import { Calendar as AntdCalender, Col, Row, Select, Checkbox } from '../node_modules/antd/dist/antd';

import SearchIcon from '../public/images/search-icon.svg';
import CalenderIcon from '../public/images/dark-blue-calendar-icon.svg';
import GrayClockIcon from '../public/images/gray-clock-icon.svg';
import LocationIcon from '../public/images/blue-location-icon.svg';
const Calender = () => {
  //Date 
  const [startDate, setStartDate] = useState(new Date());

    // Data to show in table
    const data = [
      {
        key: 0,
        date: "12 Dec, 2021",
        time: "10.15AM",
        name: "Arrora Gaur",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 1,
        date: "10 Dec, 2021",
        time: "11.20AM",
        name: "James Mullican",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 2,
        date: "09 Dec, 2021",
        time: "11.45AM",
        name: "Robert Bacins",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 3,
        date: "08 Dec, 2021",
        time: "12.15PM",
        name: "Bethany Jackson",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 4,
        date: "07 Dec, 2021",
        time: "01.20PM",
        name: "Anne Jacob",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 5,
        date: "05 Dec, 2021",
        time: "10.15AM",
        name: "Bethany Jackson",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 6,
        date: "04 Dec, 2021",
        time: "11.15AM",
        name: "James Mullican",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 7,
        date: "04 Dec, 2021",
        time: "01.25PM",
        name: "Jhon Deo",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 8,
        date: "02 Dec, 2021",
        time: "10.15AM",
        name: "Bethany Jackson",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 9,
        date: "01 Dec, 2021",
        time: "04.30PM",
        name: "James Mullican",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 4,
        date: "07 Dec, 2021",
        time: "01.20PM",
        name: "Anne Jacob",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 5,
        date: "05 Dec, 2021",
        time: "10.15AM",
        name: "Bethany Jackson",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 6,
        date: "04 Dec, 2021",
        time: "11.15AM",
        name: "James Mullican",
        appointmentType: "Face to Face",
        checked: false,
      },
      {
        key: 7,
        date: "04 Dec, 2021",
        time: "01.25PM",
        name: "Jhon Deo",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 8,
        date: "02 Dec, 2021",
        time: "10.15AM",
        name: "Bethany Jackson",
        appointmentType: "Telephone",
        checked: false,
      },
      {
        key: 9,
        date: "01 Dec, 2021",
        time: "04.30PM",
        name: "James Mullican",
        appointmentType: "Face to Face",
        checked: false,
      },
    ];
  
    // States
    const [tableData, setTableData] = useState(data);
    const [selectAll, setSelectAll] = useState(false);
  
    // staff members data
    const members = [
      { name: "Eddie Lobanovskiy", designation: "GP", img: '../images/member-img-1.png' },
      { name: "Alexey Stave", designation: "ST3 GP Registrar", img: "../images/member-img-2.png" },
      {
        name: "Anton Tkacheve",
        designation: "Practice Manager",
        img: "../images/member-img-3.png",
      },
    ];
  
    // function on the panel change of side calendar
    const onPanelChange = (value, mode) => {
      console.log(value.format("YYYY-MM-DD"), mode);
    };
  
    // Function to handle Check or uncheck the row
    const handleCheckRow = (event, key, type) => {
      const updatedData = tableData.map((item) => {
        if (type === "singleSelect") {
          if (item.key === key) {
            return { ...item, checked: event.target.checked };
          }
          return item;
        } else {
          setSelectAll(event.target.checked);
          return { ...item, checked: event.target.checked };
        }
      });
      setTableData(updatedData);
    };
  
    const handleDateFilter = (event) => {
      let month;
      switch(event.$M){
        case 0:
          month = 'Jan'
          break;
        case 1:
          month = 'Feb'
          break;
        case 2:
          month = 'Mar'
          break;
        case 3:
          month = 'Apr'
          break;
        case 4:
          month = 'May'
          break;
        case 5:
          month = 'Jun'
          break;
        case 6:
          month = 'Jul'
          break;
        case 7:
          month = 'Aug'
          break;
        case 8:
          month = 'Sep'
          break;
        case 9:
          month = 'Oct'
          break;
        case 10:
          month = 'Nov'
          break;
        case 11:
          month = 'Dec'
          break;
      }
      const date = (event.$D.toString().length === 1 ? "0" + event.$D : event.$D) + " "+ month +"," +" " + event.$y
      setTableData(data.filter(item => item.date.startsWith(date)))
    };
  return (
    <>
        <div
        className="sm:p-8 p-3 pt-10 flex flex-col gap-8 bg-[#f1f4fa] "
        
      >
        {/* Page Heading */}
        <p className="text-[#06152B] font-dm-sans text-2xl font-bold leading-normal">
          Appointment Calendar
        </p>

        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* side informations */}
          <div className="flex gap-8 bg-white mt-3 rounded-md p-8 h-inherit lg:w-fit">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-5">
                <button className="flex gap-3 justify-center items-center py-4 px-8 w-full rounded-lg bg-[#0E72B7] text-white text-base leading-normal">
                  <span>+</span>
                  <span>Create Schedule</span>
                </button>
                <AntdCalender
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  onChange={handleDateFilter}
                  headerRender={({ value, onChange }) => {
                    const start = 0;
                    const end = 12;
                    const monthOptions = [];

                    let current = value.clone();
                    const localeData = value.localeData();
                    const months = [];
                    for (let i = 0; i < 12; i++) {
                      current = current.month(i);
                      months.push(localeData.monthsShort(current));
                    }

                    for (let i = start; i < end; i++) {
                      monthOptions.push(
                        <Select.Option key={i} value={i} className="month-item">
                          {months[i]}
                        </Select.Option>
                      );
                    }

                    const year = value.year();
                    const month = value.month();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                      options.push(
                        <Select.Option key={i} value={i} className="year-item">
                          {i}
                        </Select.Option>
                      );
                    }
                    return (
                      <div style={{ padding: 8 }}>
                        <Row gutter={8}>
                          <Col>
                            <Select
                              size="small"
                              popupMatchSelectWidth={false}
                              className="my-year-select"
                              value={year}
                              onChange={(newYear) => {
                                const now = value.clone().year(newYear);
                                onChange(now);
                              }}
                            >
                              {options}
                            </Select>
                          </Col>
                          <Col>
                            <Select
                              size="small"
                              popupMatchSelectWidth={false}
                              value={month}
                              onChange={(newMonth) => {
                                const now = value.clone().month(newMonth);
                                onChange(now);
                              }}
                            >
                              {monthOptions}
                            </Select>
                          </Col>
                        </Row>
                      </div>
                    );
                  }}
                  className="lg:w-min border border-[#F1F4FA] rounded-md p-2"
                />

              </div>



              <div className="flex flex-col gap-5">
                <p className="text-[#06152B] text-base font-bold leading-normal">
                  Staff Members
                </p>
                <div className="rounded-lg bg-[#F1F4FA] flex gap-2 items-center py-4 px-5 w-full">
                  <Image src={SearchIcon} width={40} height={40} alt='SarchIcon' />
                  <input
                    type="text"
                    placeholder="Search for People"
                    className="outline-none border-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {members.map((member) => (
                    <div className="p-2 pt-0 border-b border-[#f2f2f4] flex gap-4 items-center">
                      <img
                        src={member.img}
                        alt="_person"
                        className="w-[34px] h-[34px] rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-[#06152B] font-sm leading-normal">
                          {member.name}
                        </p>
                        <p className="text-[#838a95] font-xs leading-normal">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-scroll">
            <table width="100%" border="0">
              <tbody>
                <tr className="flex gap-1 pb-2 px-2 justify-start items-center sticky top-0 h-10  bg-[#f1f4fa] z-[1]">
                  <td className="w-[5%]">
                  <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>

                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                  <div className="flex items-center text-sm">
                        Date
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                  <div className="flex items-center text-sm">
                        Time
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium">
                  <div className="flex items-center text-sm">
                        Name
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                  </td>
                  <td className="w-[22.5%] text-[#4b5769] text-base leading-normal font-medium ">
                  <div className="flex items-center text-sm">
                        Appointment Type
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                  </td>
                </tr>
                {tableData.map((item) => (
                  <tr className="flex gap-2 justify-start items-center py-4 px-2 bg-white rounded-lg mb-3 hover:bg-[#fafafa] hover:cursor-pointer">
                    <td className="w-[5%] ps-1">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>

                    </td>
                    <td className="w-[22.5%] flex gap-3 items-center">
                      <Image src={CalenderIcon } width={15} height={15} alt="Icon" />
                      <p className="text-[#06152B] font-base leading-normal">
                        {item.date}
                      </p>
                    </td>
                    <td className="w-[22.5%] flex gap-3 items-center">
                    <Image src={GrayClockIcon } width={15} height={15} alt="Icon" />

                      <p className="text-[#06152B] font-base leading-normal">
                        {item.time}
                      </p>
                    </td>
                    <td className="w-[22.5%]">
                      <p className="text-[#06152B] font-base leading-normal">
                        {item.name}
                      </p>
                    </td>
                    <td className="w-[22.5%] flex gap-4 py-3 px-5 min-w-[171px] rounded-full bg-[#ebebfb]">
                    <Image src={LocationIcon } width={15} height={15} alt="Icon" />
                      <p className="text-[#0E72B7] text-base leading-normal">
                        {item.appointmentType}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    

    </>

  )
}

export default Calender;