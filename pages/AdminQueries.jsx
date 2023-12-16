import React from 'react';
import { useState, useEffect } from "react";
// import CommonModal from "./CommonModel/CommonModal";
// import AdminQueriesModalContent from "./AdminQueriesModalContent";
import { Table } from '../node_modules/antd/dist/antd';
import Image from 'next/image';
import searchIcon from "../public/images/search-icon-2.svg";
import deleteIcon from "../public/images/delete-icon.svg";
import tickIcon from '../public/images/tick-icon.svg';


const AdminQueries = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  
   

  // Data to show in the table
  let data = [
    {
      key: 0,
      name: "Letter Request",
      startDate: "03/12/2023",
      assignedTo: "Secretaries",
      patient: "Justin Smith",
      status: "Pending",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 1,
      name: "Repeat Prescription",
      startDate: "03/12/2023",
      assignedTo: "Pharmacists",
      patient: "Elliot Williams",
      status: "Pending",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 2,
      name: "Fit (Sick) Note",
      startDate: "01/12/2023",
      assignedTo: "Secretaries",
      patient: "Sarah Khan",
      status: "Pending",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 3,
      name: "Test Result",
      startDate: "03/12/2023",
      assignedTo: "Pharmacists",
      patient: "Ben Eden",
      status: "Pending",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 4,
      name: "Referral Query",
      startDate: "03/12/2023",
      assignedTo: "Reception Team",
      patient: "Thomas Blake",
      status: "Done",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 5,
      name: "Fit (Sick) Note",
      startDate: "03/12/2023",
      assignedTo: "Secretaries",
      patient: "William Grey",
      status: "Done",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
    {
      key: 6,
      name: "Repeat Prescription",
      startDate: "03/12/2023",
      assignedTo: "Pharmacists",
      patient: "Michael Boot",
      status: "Done",
      requestDate: "03/12/2323",
      queryType: "Letter Request",
      furtherDetails:
        "Please could you provide a letter that I have no medical or health issues as I need this for a visa application. Thank you!",
    },
  ];

  // State to manage data
  const [storedData, setStoredData] = useState(data);

  // Function to update the row status
  const handleStatusChange = (key, status) => {
    if (status === "Pending") {
      setOpen(false)
      const updatedTasks = storedData.map((task) => {
        if (task.key === key) {
          return { ...task, status: "Done" };
        }
        return task;
      });
      setStoredData(updatedTasks);
    }
    else{
      const updatedTasks = storedData.map((task) => {
        if (task.key === key) {
          return { ...task, status: "Pending" };
        }
        return task;
      });
      setStoredData(updatedTasks);

    }
  };

  // Function to delete the data from the table
  // const handleDeleteRow = (key) => {
  //   setStoredData(storedData.filter((item) => item.key !== key));
  // };

  // Table Column Names
  const columns = [
    {
      title: "Task Name",
      
      dataIndex: "name",
      render: (text, record) => (
        <p onClick={() => (setOpen(true),setModalContent(record))} className="cursor-pointer text-[#0E72B7] text-sm leading-normal font-dm-sans">
          {text}
        </p>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (text, record) => (
        <p className="text-[#515b6b] text-sm leading-normal font-dm-sans">
          {text}
        </p>
      ),
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      render: (text, record) => (
        <p className="text-[#FC8D71] text-sm leading-normal font-dm-sans">
          {text}
        </p>
      ),
    },
    {
      title: "Patient",
      dataIndex: "patient",
      render: (text, record) => (
        <p className="text-[#515b6b] text-sm leading-normal font-dm-sans">
          {text}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <button
          className={`py-[6px] px-3 rounded-lg ${
            record.status === "Pending" ? "bg-[#0E72B7]" : "bg-[#9BD4E3]"
          } ${
            record.status === "Pending" ? "text-white" : "text-[#0B132B]"
          } text-sm leading-normal`}
        >
          {text}
        </button>
      ),
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div className="flex gap-5 items-center">
          <Image src={tickIcon} alt="edit" className="cursor-pointer" onClick={() => handleStatusChange(record.key, record.status)} />
          {/* <Image
            onClick={() => handleDeleteRow(record.key)}
            src={deleteIcon}
            alt="delete"
            className="cursor-pointer"
          /> */}
        </div>
      ),
    },
  ];

  // Functions and states to manage the selected row
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // Function To handle search
const handleSearch  = (event) => {
    setStoredData(data.filter(item => item.patient.startsWith(event.target.value)));
};

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // Function to cancel modal
  const handleCancelModal = () => {
    setOpen(false);
  };
  return (
   
    <>
      <div
        className="p-8 pt-7 flex flex-col gap-12 bg-[#f1f4fa] bg-no-repeat bg-cover"
      >
        <div className="flex justify-between md:flex-row flex-col items-center gap-6">
          {/* Header */}
          <p className="text-[#06152B] font-dm-sans md:text-lg text-sm font-bold leading-normal">
            Administrative Queries
          </p>
          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="flex gap-2 bg-white py-2 px-3 rounded-lg h-[44px]">
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
                onChange={handleSearch}
              />
              <Image src={searchIcon} width={20} height={20} alt="_search" />
            </div>
            <button className="h-[44px] py-3 px-8 rounded-lg flex gap-2 items-center justiy-center text-white font-dm-sans text-sm font-medium bg-[#0E72B7]">
              <span>+</span>
              <span>Add Task</span>
            </button>
          </div>
        </div>
        <div className='lg:w-[100%]'>

        <div className="flex flex-col gap-4">
          {/* Todo Table */}
          <div className="p-6 rounded-[15px] bg-white flex flex-col gap-10 overflow-scroll">
            <div className="flex justify-between items-center gap-6">
              <p className="text-[#0B132B] text-base font-medium leading-normal">
                To Do{" "}
              </p>
              <p className="text-[#0B132B] text-sm font-medium leading-normal cursor-pointer">
                See More
              </p>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              pagination={false}
              dataSource={storedData.filter(
                (item) => item.status === "Pending"
              )}
              className="whiteHeader"
            />
          </div>

          {/* Completed Table */}
          <div className="p-8 rounded-[15px] bg-[#FCFDFE] flex flex-col gap-10 overflow-scroll">
            <div className="flex justify-between items-center gap-6">
              <p className="text-[#0B132B] text-base font-medium leading-normal">
                Completed{" "}
              </p>
              <p className="text-[#0B132B] text-sm font-medium leading-normal cursor-pointer">
                See More
              </p>
            </div>
            <Table
              className="grayTable"
              rowSelection={rowSelection}
              columns={columns}
              pagination={false}
              dataSource={storedData.filter((item) => item.status === "Done")}
            />
          </div>
        </div>
        </div>

      </div>
      {/* <CommonModal
        title=""
        children={
          <AdminQueriesModalContent
            modalContent={modalContent}
            handleCancelModal={handleCancelModal}
          />
        }
        isModalOpen={open}
        handleCancel={handleCancelModal}
      /> */}
    </>
  )
}

export default AdminQueries