
import React from 'react'
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import Link from 'next/link';
import Image from 'next/image';
import donutChartIcon from '../public/images/donut-chart-icon.svg';

function Dashboard() {

      // Line chart 1 Options

  const lineChart1 = {
    toolbox: {
      feature: {
        saveAsImage: { show: false },
      },
    },
    grid: {
      left: "-10%",
      right: "0%",
      top:  "-3%",
      bottom: "-20%",
      
      containLabel: true,
    },
    xAxis: [
      {
        show: false,
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        show: false,
        type: "value",
        
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Total",
        
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#9BD4E3",
              
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [0, 202, 80, 204, 90, 340, 250],
      },
    ],
  };

    // Line Chart 2 Options
    const lineChart2 = {
      toolbox: {
        feature: {
          saveAsImage: { show: false },
        },
      },
      grid: {
        left: "-10%",
      right: "0%",
      top:  "-3%",
      bottom: "-20%",
        containLabel: true,
      },
      xAxis: [
        {
          show: false,
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          show: false,
          type: "value",
        },
      ],
      series: [
        {
          name: "Line 1",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#FC8D71",
              },
              {
                offset: 1,
                color: "#FC8D71",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
      ],
    };

// Custom colors for bar chart
const customColors = [
  "#FC8D71",
  "#9BD4E3",
  "#FC8D71",
  "#9BD4E3",
  "#9BD4E3",
  "#FC8D71",
  "#9BD4E3",
  "#FC8D71",
  "#9BD4E3",
  "#FC8D71",
  "#9BD4E3",
  "#FC8D71",
  "#9BD4E3",
];


  // Bar Chart Options
  const barChartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: { show: false },
    grid: {
      top: "1%",
      left: "3%",
      right: "14%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: {
      axisLine: {
        show: false,
        
      },
      axisTick: {
        show: false,
      },
      type: "category",
      data: ["July", "June", "May", "Apr", "Mar", "Feb", "Jan"],
    },
    series: [
      {
        name: "Custom Series",
        type: "bar",
        stack: "total",
        label: {
          position: "right",
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [23400, 15000, 30000, 22000, 10000, 23400, 5500],
        itemStyle: {
          color: function (params) {
            return customColors[params.dataIndex];
          },
          borderRadius: [0, 20, 20, 0], // Top-right and bottom-right borderRadius
        },
        barMaxWidth: 15, // Adjust this value to reduce the height of the bars
        barCategoryGap: "10%", // Adjust this value to reduce the gap between bars
      },
    ],
  };

   // Donut Chart Options
   const donutChartOption = {
    title: {
      // text: '',
      rich: {
        myIcon: {
          height: 70, // Set the height of your icon
          width: 70, // Set the width of your icon
          
          backgroundColor: {
            backgroundImage :  "../images/donut-chart-icon.svg", // Use the imported icon as the background image
          },
        },
      },
      left: "center",
      top: "center",
    },
    legend: { show: true ,
      bottom: 10,
      left: 'center',
    icon:'circle'},
    graphic: [
      {
        type: 'image',
        id: 'myIcon',
        right: 'center',
        top: 'center',
        z: 10,
        bounding: 'raw',
        origin: [20, 20],
        style: {
          backgroundImage :  `url('${donutChartIcon}')`, // Use the imported icon as the background image
          width: 45,
          height: 45,
        },
      },
    ],
    series: [
      {
        type: "pie",
        data: [
      
          { value: 21, name: 'Routine', itemStyle: { color: '#0e72b7' } },
          { value: 4, name: 'Semi-Urgent', itemStyle: { color: '#9bd4e3' } },
          { value: 3, name: 'Urgent', itemStyle: { color: '#f28b70' } },
        ],
        radius: ["70%", "55%"],
        label: {
          show: false, // Hide the labels
        },
        itemStyle: {
          borderRadius: 0, // Border radius for the chart portions
          borderWidth: 0,
          borderColor: "#fff",
        },
      },
    ],
  };

  // Data to show in table
  const tableData = [
    {
      name: "Arrora Gaur",
      age: "19",
      presentingComplaint: "High Fever",
      status: "Semi-Urgent",
    },
    {
      name: "James Mullican",
      age: "87",
      presentingComplaint: "Chronic Knee Pain",
      status: "Routine",
    },
    {
      name: "Robert Bacins",
      age: "41",
      presentingComplaint: "Headache",
      status: "Semi-Urgent",
    },
    {
      name: "Bethany Jackson",
      age: "67",
      presentingComplaint: "Chest Pain",
      status: "Urgent",
    },
    {
      name: "Anne Jacob",
      age: "53",
      presentingComplaint: "Chesty Cough",
      status: "Semi-Urgent",
    },
  ];


  return (
        <>




    <div className='md:mt-7 sm:mt-6 grid md:grid-cols-2 md:gap-8 sm:gap-0 gap-[75px]  2xl:ps-[25px] xl:ps-[15px] lg:ps-[20px] md:px-5 sm:px-5 px-3 lg:px-0 pt-8 2xl:w-2/3 xl:w-[63%] lg:w-[58%] md:w-[100%] sm:w-[100%] w-[80%]'>
        <div className='  flex justify-between w-full rounded-lg h-[170px]'>
        <div className="w-full h-[232px] bg-white flex flex-col gap-2 rounded-lg">
                <div className="flex justify-evenly pt-9">
                

                  <Image src="/images/line-chart-icon-1.svg" alt='Appointment-booked-Image'  width={60} height={60} />
                
                  <div className="flex flex-col gap-2 pe-2">
                    <div className="flex gap-8 flex-wrap">
                      <p className="text-[#515b6b] text-sm leading normal ">
                        Appointments Booked
                      </p>
                      <p className="text-[#0E72B7] xl:ps-5 text-xs leading-normal">
                        +140 This Week
                      </p>
                    </div>
                    <p className="text-[#555A6B] text-2xl font-bold">3,483</p>
                  </div>
                </div>
                <ReactEcharts option={lineChart1} />
              </div>

    </div>
    <div className=' flex justify-between w-full rounded-[10px] md:pt-[0px] sm:pt-[80px]'>
        <div className="w-full h-[232px] bg-white flex flex-col gap-2 rounded-[10px]">
                <div className="flex justify-evenly gap-1 pt-8 ps-1">
                  <Image src="/images/line-chart-icon-2.svg" alt='Image'  width={50} height={50} />

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-8 flex-wrap">
                      <p className="text-[#515b6b] text-sm leading normal ">
                        Admin Request
                      </p>
                      <p className="text-[#0E72B7] text-xs leading-normal ">
                        +18 Queries Today
                      </p>
                    </div>
                    <p className="text-[#555A6B] text-2xl font-bold">2790</p>
                  </div>
                </div>
                <ReactEcharts option={lineChart2} />
              </div>

    </div>

    </div>

    
    <div className="mt-5 2xl:ms-[25px] xl:ms-[15px] lg:ms-[20px] md:mx-5 sm:mx-5 mx-3 lg:mx-0 bg-[#fafcfd] flex flex-col lg:gap-4 gap-10 px-5  pt-8 2xl:w-[65%] xl:w-[62%] lg:w-[56%]
     md:w-[93%] sm:w-[94%] w-[80%] rounded-lg overflow-auto ">
              <div className="flex gap-6 justify-between items-center">
                <p className="text-gray-600 sm:ps-2 ps-2 sm:font-medium sm:text-lg text-sm leading-normal">
                  Recent Appointments Booked
                </p>
              <Link href=''>
                <p className='text-[13px] text-[#3A36DB]'>See More</p>
              </Link>

              </div>

  {/*===== Patient Info Table======= */}
  <div className="h-[415px] overflow-y-scroll calenderTable mt-5">
                <table width="100%" border="0">
                  <tbody>
                    <tr className="flex gap-1 px-2 justify-start items-center sticky top-0 h-10  bg-[#fafcfd] z-[1]">
                      <td className="w-[25%] text-[#4b5769] text-base leading-normal font-medium">
                      <div className="flex items-center text-sm">
                        Name
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                      </td>
                      <td className="w-[15%] text-[#4b5769] text-base leading-normal font-medium">
                      <div className="flex items-center text-sm">
                        Age
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                      </td>
                      <td className="w-[25%] text-[#4b5769] text-base leading-normal font-medium">
                        <div className="flex items-center text-sm">
                        Presenting Complaint
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                      </td>
                      <td className="w-[35%] text-[#4b5769] text-base leading-normal font-medium">
                      <div className="flex items-center text-sm">
                        Status
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
                      </td>
                    </tr>
                    {tableData.map((item) => (
                      <tr className="flex gap-2 justify-between items-center py-4 px-2 bg-white rounded-lg mb-3 hover:bg-[#F0F0F0] hover:cursor-pointer border-b">
                        <td className="w-[25%] text-[#06152B] font-base leading-normal">
                          {item.name}
                        </td>
                        <td className="w-[15%] text-[#06152B] font-base leading-normal">
                          {item.age}
                        </td>
                        <td className="w-[25%]">
                          <p className="text-[#06152B] font-base leading-normal">
                            {item.presentingComplaint}
                          </p>
                        </td>
                        <td
                          className={`w-[35%] flex py-3 px-8 justify-center items-center rounded-full text-base leading-normal ${
                            item.status === "Semi-Urgent"
                              ? "text-[#0B132B]"
                              : item.status === "Routine"
                              ? "text-[#0E72B7]"
                              : "text-[#FC8D71]"
                          } ${
                            item.status === "Semi-Urgent"
                              ? "bg-[#9BD4E3]"
                              : item.status === "Routine"
                              ? "bg-[#CDEAF1]"
                              : "bg-[#FEE8E3]"
                          }`}
                        >
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 

            </div>


           

    
    <div className='flex'>
        <div className='lg:absolute top-[88px] 2xl:right-[20px] xl:right-[15px] lg:right-[20px]  xl:w-[370px] lg:w-[300px] sm:w-[100%] w-[80%] md:mx-5 lg:mx-0 sm:mx-5 mx-3 md:mt-5 sm:mt-5 mt-3 lg:mt-9 2xl:w-1/4'>

   
        <div className="flex flex-col gap-6">
            {/*=== Bar Chart ====*/}
            <div className="flex flex-col gap-2 px-2 pt-6 rounded-lg bg-white">
              <p className="text-gray-600 xl:text-lg text-md font-[400] leading-normal ps-3" >
                Appointments Booked Per Month
              </p>
              <ReactEcharts option={barChartOption} />
            </div>

            {/* Donut Chart */}
            <div className="flex flex-col gap-2 p-6 rounded-lg bg-white mb-10">
              <div className="flex gap-1">
                <p className="text-gray-600 text-md font-medium leading-normal">
                  Appointments by Triage Category
                </p>
                          <Image src="/images/gray-action-icon.svg" className='ps-1' width={20} height={20} alt='Appointment-Image' />
              </div>
              <ReactEcharts option={donutChartOption} />
            </div>
          </div>


        </div>
        
    </div>
 
 

    </>
  )
}

export default Dashboard;