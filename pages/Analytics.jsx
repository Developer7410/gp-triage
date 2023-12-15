import {useState, useEffect} from 'react';
import {  DatePicker } from '../node_modules/antd/dist/antd';
import ReactEcharts from "echarts-for-react";


const Analytics = () => {
  
  // Header Date Change function
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const countByYearData  = {
    grid: {
      left: "7%",
      right: "2%",
      bottom: "5%",
      top:'7%',
      containLabel: true,
    },
    xAxis: {
       name: 'Year',
          nameLocation: 'center',
          nameTextStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#00000',
            padding: [0, 0, 50, 0],
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
            }
          },
      type: 'category',
      data: ['Oct 01', 'Oct 08', 'Oct 15', 'Oct 22', 'Oct 27', 'Nov 05'],
       axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          
    },
    yAxis: {
       name: 'Count',
          nameLocation: 'center',
          nameTextStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#00000',
            padding: [0, 0, 30, 0],
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
            }
          },
      type: 'value',
    
    },
    series: [
      {
        symbol:'none',
        lineStyle:{
          width:3,
          color:'#108dff'
        },
        axisPointer:{
          show:false
        },
        data: [3, 18, 3, 2, 2, 3, 4],
        type: 'line'
      }
    ]
  };
  const admiReqByReqTypeData = {
    grid: {
      left: '12%',
      right: '2%',
      bottom: '20%',
      top: '15%%',
      containLabel: true
    },
    xAxis: [
      {
        name: 'Request Type',
        nameLocation: 'center',
        nameTextStyle: {
          fontWeight: 'normal',
          fontSize: 18,
          color: '#00000',
          padding: [50, 0, 0, 0],
        },
        axisLine: {
          show: false,
        },
        type: 'category',
        data: ['Doctor(s) Letter', 'Fit(Sick) Note', 'Something Else', 'Test Results', 'Questions About Medical', 'Questions About a Referral'],
        axisTick: {
show:false
        },
        axisLabel:{
interval:0,
formatter: function (value) {
  // Split the label into multiple lines based on space
  return value.split(' ').join('\n');
},
textStyle: {
  whiteSpace: 'pre-wrap', // Allow wrapping within words
},

        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed',
          },
        },
      },
    ],
    yAxis: [
      {
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
        name: 'Admin Requests',
        nameLocation: 'center',
        nameTextStyle: {
          fontWeight: 'normal',
          fontSize: 18,
          color: '#00000',
          padding: [0, 0, 30, 0],
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        type: 'value',
      },
    ],
    series: [
      {
        itemStyle: {
          color: '#0e72b7', // Set the bar color
        },
        type: 'bar',
        data: [9, 7, 7, 7, 2, 1],
        label: {
          position: 'top',
          show: true,
        },
      },
    ],
  };
  
  const reqByPatientData = {
    grid: {
      left: '32%',
      right: '5%',
      bottom: '25%',
      top:'-2%',
    },
    xAxis: [
      {
        name:'Admin Requests',
        nameLocation: 'center',  // Center the yAxis name
        nameTextStyle:{
          fontWeight:'normal',
          fontSize:18,
          color:'#00000',
        padding: [20, 0, 0, 0],
        align:'right'
              
        },
        axisLine: {
          show: false,
        },
      
        type: 'value',
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          }
        }
      }
    ],
    yAxis: [
      {
        name:'Patient',
        nameLocation: 'center',  // Center the yAxis name
        nameTextStyle:{
          fontWeight:'normal',
          fontSize:18,
          color:'#00000',
        padding: [0, 0, 80, 0],
              
        },
          axisLine: {
          show: false,
        },
        axisTick: {
          show: false
        },
      
        type: 'category',
        data: ['Emilie kewn', 'Arnold Olley', 'Anee Rumble', 'Test Patient 1', 'Jane Smith'],
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed',
          }
        }
      }
    ],
    series: [
      {
        itemStyle: {
          color: '#0e72b7', // Set the bar color
        },
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [1, 1, 1, 3, 27],
        label: {
          position: 'right',
          show: true,
        },
      }
    ]
  };
  
const reqAdminbyStatus =  {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right',
    icon:'circle',
    top:'center',
   
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '80%'],
      data: [
        { value: 21, name: 'Active', itemStyle: { color: '#0e72b7' } },
        { value: 4, name: 'Inactive', itemStyle: { color: '#9bd4e3' } },
      ],
      label: {
        show: true,
        formatter: '{c} ({d}%)', // Display label name, value, and percentage
      },
      center: ['38%', '50%'],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};


const adminReasonData = {
grid:{
top:'10%',
left:'10%'
},
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 'right',
    icon:'circle',
    top:'center',
    
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '80%',
      data: [
        { value: 21, name: 'Pending', itemStyle: { color: '#0e72b7' } },
        { value: 5, name: 'Cancelled', itemStyle: { color: '#108dff' } },
        { value: 4, name: 'Completed', itemStyle: { color: '#9bd4e3' } },
        { value: 3, name: 'In-Progress', itemStyle: { color: '#f28b70' } },
      ],
      center: ['38%', '50%'],

      label: {
        show: true,
        formatter: '{c} ({d}%)', // Display label name, value, and percentage
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
  return (
    <>
    
    <div
        className="sm:px-8 px-5 pt-7 flex flex-col bg-[#f1f4fa] mb-5"
        
      >
        <div className="flex justify-between items-center gap-6">
         
          <p className="text-[#06152B] font-dm-sans text-2xl font-bold leading-normal">
            Analytics
          </p>
        </div>

      
        <div className="bg-white flex flex-col gap-4 mt-12">
          <div className="flex gap-6 justify-between items-center p-3 pr-10 border-b border-gray-200">
            <div className="flex flex-col gap-2">
              <p className="text-[#252423] md:text-lg sm:text-sm text-xs leading-normal">
                Quick Summary
              </p>
              <p className="text-[#605E5C] sm:text-sm text-xs leading-normal">
                Admin Requests
              </p>
            </div>
            <div className="flex gap-10 items-center">
              <div className="flex gap-2 itesm-center">
                {/* Date Selectors */}
                <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} />
              </div>
              <div className="flex flex-col gap-2 border-l-4 border-[#118DFF] pl-3">
                <p className="text-[#252423] text-sm leading-normal">33</p>
                <p className="text-[#605E5C] sm:text-sm text-xs leading-normal">
                  Total Admin Requests
                </p>
              </div>
            </div>
          </div>

          {/* All Charts */}
          <div className="flex flex-col gap-3 p-3">
            <div className="2xl:grid 2xl:grid-cols-5 flex lg:flex-row flex-col gap-3">
              {/* Pie Chart Section */}
              <div className="flex flex-col 2xl:col-span-2 gap-5 h-[284px] p-3 rounded-md w-full" style={{ boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                <p className="text-[#252423] sm:text-lg text-sm font-medium leading normal">
                  Admin Requests by Status Reason
                </p>
                <ReactEcharts option={adminReasonData} />

              </div>

              {/* Column Chart Section */}
              <div className="flex flex-col 2xl:col-span-2 gap-5 h-[284px] p-3 rounded-md w-full" style={{ boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                <p className="text-[#252423] sm:text-lg text-sm font-medium leading normal">
                  Admin Requests by Request Type
                </p>
                <ReactEcharts option={admiReqByReqTypeData} />

                
                {/* Column Chart */}
              </div>

              {/* Donut Chart Section */}
              <div className="flex flex-col 2xl:col-span-1 gap-5 h-[284px] p-3 rounded-md w-full" style={{ boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                <p className="text-[#252423] sm:text-lg text-sm font-medium leading normal">
                  Admin Requests by Status
                </p>
                <ReactEcharts option={reqAdminbyStatus} />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              {/* Bar Chart Section */}
              <div className="flex flex-col gap-5 h-[284px]  rounded-md md:w-1/3 w-[100%]" style={{ boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                <p className="text-[#252423] sm:text-lg text-sm font-medium leading normal ps-2 pt-2">
                  Admin Requests by Patient
                </p>
                <ReactEcharts option={reqByPatientData} />

                              </div>

              {/* Line Chart Section */}
              <div className="flex flex-col gap-5 h-[284px] p-3 rounded-md md:w-2/3 w-[100%]" style={{ boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
                <p className="text-[#252423] sm:text-lg text-sm font-medium leading normal">
                  Count by Year, Quarter, Month and Day
                </p>
                <ReactEcharts option={countByYearData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Analytics