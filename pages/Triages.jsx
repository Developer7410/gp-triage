import React from 'react';
import { useState, useEffect } from "react";
import Image from 'next/image';
import CommonModal from "./CommonModel/CommonModal";
import TriagesModalContent from "./TriagesModalContent";
import { Popover, Checkbox } from '../node_modules/antd/dist/antd';
import bgImg from "../public/images/request-bg.svg";
import searchIcon from '../public/images/search-icon-2.svg';
import grayDeleteIcon from "../public/images/gray-delete-icon.svg";
import calendarIcon from "../public/images/dark-blue-calendar-icon.svg";
import editIcon from "../public/images/black-edit-icon.svg";
import redDeleteIcon from "../public/images/red-delete-icon.svg";
import redStar from "../public/images/red-star-icon.svg";
import grayStar from "../public/images/gray-star-icon.svg";
import blueActionIcon from "../public/images/blue-action-icon.svg";


const Triages = () => {
  
  // data to show in table
  let dataToShow = [
    {
      id: "#876364",
      name: "Arrora Gaur",
      age: "19",
      presentingComplaint: "High Fever",
      date: "12 Dec, 2020",
      status: "Semi-Urgent",
      star: true,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#876123",
      name: "James Mullican",
      age: "87",
      presentingComplaint: "Chronic Knee Pain",
      date: "10 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#876213",
      name: "Robert Bacins",
      age: "41",
      presentingComplaint: "Headache",
      date: "09 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#876987",
      name: "Bethany Jackson",
      age: "67",
      presentingComplaint: "Chest Pain",
      date: "09 Dec, 2020",
      status: "Urgent",
      star: true,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#871345",
      name: "Anne Jacob",
      age: "53",
      presentingComplaint: "Chesty Cough",
      date: "10 Dec, 2020",
      status: "Semi-Urgent",
      star: true,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#872345",
      name: "Bethany Jackson",
      age: "22",
      presentingComplaint: "Tiredness",
      date: "10 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#872346",
      name: "James Mullican",
      age: "26",
      presentingComplaint: "Persistent Low Mood",
      date: "10 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#873245",
      name: "Jhon Deo",
      age: "38",
      presentingComplaint: "Vertigo and Dizziness",
      date: "08 Dec, 2020",
      status: "Semi-Urgent",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#875364",
      name: "Bethany Jackson",
      age: "67",
      presentingComplaint: "Difficulty in Breathing",
      date: "02 Dec, 2020",
      status: "Urgent",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
    {
      id: "#878769",
      name: "James Mullican",
      age: "31",
      presentingComplaint: "Loose Stools",
      date: "01 Dec, 2020",
      status: "Routine",
      star: false,
      checked: false,
      otherProblems: [
        "Fever",
        "Vomiting",
        "Muscle pain",
        "Joint pain",
        "Fever lasting 3 to 7 days",
        "Fever between 38°C and 40°C or between 100.4 and 104°F",
        "Moderate headache",
        "White spots on tonsils",
        "Throat swelling",
        "Swelling on both sides of throat",
      ],
      possibleCauses: [
        "1. Acute streptococcal pharyngitis",
        "2. Acute bacterial tonsilitis",
      ],
    },
  ];

  // State to handle data
  const [searchFilter, setSearchFilter] = useState('')
  const [data, setData] = useState(dataToShow);

  // States
  const [tableData, setTableData] = useState(dataToShow);
  const [selectAll, setSelectAll] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [actionHoverId, setActionHoverId] = useState("");

  // Function to handle Check or uncheck the row
  const handleCheckRow = (event, id, type) => {
    const updatedData = tableData.map((item) => {
      if (type === "singleSelect") {
        if (item.id === id) {
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

  // Function to handle favourite row
  const handleClickFav = (row) => {
    const updatedData = tableData.map((item) => {
      if (item.id === row.id) {
        return { ...item, star: !item.star };
      }
      return item;
    });
    setTableData(updatedData);
  };

  // Function to delete row data
  const handleDeleteData = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  // Function to cancel modal
  const handleCancelModal = () => {
    setOpen(false);
  };

  // Function to handle search functionality
  const handleSearch = (event) => {
    setTableData(dataToShow.filter(item => item.id.startsWith(event.target.value) || item.name.startsWith(event.target.value)));
  };

  return (
    <>
        <div
        className="p-8 pt-5 flex flex-col gap-12 bg-[#f1f4fa] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})`, height: "100%"  }}

      >
        <div className="flex justify-between md:flex-row flex-col items-center gap-6">
          {/* Header */}
          <p className="text-[#06152B] font-dm-sans md:text-xl text-sm font-bold leading-normal">
            Triage Centre
          </p>
          <div className="flex gap-3 items-center">
            {/* Search */}
            <div className="flex gap-2 bg-white py-3 px-5 rounded-lg h-[44px]">
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
                onChange={handleSearch}
              />
              <Image src={searchIcon} alt="Icon" width={20} height={20} />
            </div>
            <button className="h-[44px] py-3 px-8 rounded-lg flex gap-2 items-center justiy-center text-white font-dm-sans text-sm font-medium bg-[#0E72B7]">
              <span>+</span>
              <span>Add Task</span>
            </button>
          </div>
        </div>
        <div className="h-full overflow-scroll">
        <table width="100% overflow-scroll" border="0">
          <tbody>
            <tr className="flex px-2 gap-2 justify-start items-center sticky top-0 h-10  bg-[#f1f4fa] z-[1]">
              <td className="w-[5%]">
                <Checkbox
                  onChange={(e) => handleCheckRow(e, null, "multiSelect")}
                  defaultChecked={false}
                  checked={selectAll}
                />
              </td>
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium">
              <div className="flex items-center text-sm">
                        Triage ID
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[13.58%] text-[#4b5769] text-base leading-normal font-medium">
              <div className="flex items-center text-sm">
                        Name
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium">
              <div className="flex items-center text-sm">
                        Age
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium ">
                <div className="flex items-center text-sm">
                        
                Presenting Complaint
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium">
              <div className="flex items-center text-sm">
                        Date
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[19.16%] text-[#4b5769] text-base leading-normal font-medium">
              <div className="flex items-center text-sm">
                        Status
                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
                    </div>
              </td>
              <td className="w-[8%] text-[#4b5769] text-base leading-normal font-medium flex justify-end items-center">
              <Image src={grayDeleteIcon} width={16} height={16} alt="Icon" />

              </td>
            </tr>
            {tableData.map((item) => (
              <tr
                className="flex gap-2 justify-start items-center py-4 px-2 bg-white rounded-lg mb-3 hover:bg-[#fafafa] hover:cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setModalContent(item);
                }}
              >
                <td className="w-[5%]">
                  <Checkbox
                    onChange={(e) => handleCheckRow(e, item.id, "singleSelect")}
                    defaultChecked={false}
                    checked={item.checked}
                  />
                </td>
                <td className="w-[8%] text-[#06152B] font-base leading-normal">
                  {item.id}
                </td>
                <td className="w-[13.58%] text-[#06152B] font-base leading-normal">
                  {item.name}
                </td>
                <td className="w-[8%]">
                  <p className="text-[#06152B] font-base leading-normal">
                    {item.age}
                  </p>
                </td>
                <td className="w-[19.16%] text-[#06152B] text-base leading-normal">
                  {item.presentingComplaint}
                </td>
                <td className="w-[19.16%] flex gap-4 py-3 px-5 ">
              <Image src={calendarIcon} width={15} height={15} alt="Icon" />

                  <p className="text-[#06152B] text-base leading-normal">
                    {item.date}
                  </p>
                </td>
                <td
                  className={`w-[19.16%] flex py-3 px-8 justify-center items-center rounded-full text-base leading-normal ${
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
                <td className="w-[8%] flex gap-8 justify-center items-center py-3 px-2">
                  {/* <Image
                    className="cursor-pointer"
                    onClick={() => handleClickFav(item)}
                    src={item.star ? redStar : grayStar}
                    alt="_fav"
                  /> */}
                  <Popover
                    placement="bottom"
                    content={
                      <div className="bg-white rounded-lg p-0 flex flex-col gap-1">
                        <div className="cursor-pointer bg-[#f5f5fd] flex items-center gap-2 rounded-lg p-2 w-[90px] text-[#0B132B] text-sm leading-normal font-medium">
              <Image src={editIcon} width={18} height={18} alt="Icon" />

                          Edit
                        </div>
                        <div
                          onClick={() => handleDeleteData(item.id)}
                          className="cursor-pointer bg-[#fff7fb] flex items-center gap-2 rounded-lg p-2 w-[90px] text-[#FC8D71] text-sm leading-normal font-medium"
                        >
              <Image src={redDeleteIcon} width={18} height={18} alt="Icon" />

                          Delete
                        </div>
                      </div>
                    }
                  >
                    <Image  width={40} height={40}
                      onMouseEnter={() => setActionHoverId(item.id)}
                      onMouseLeave={() => setActionHoverId("")}
                      className="p-2 cursor-pointer"
                      src={
                        actionHoverId === item.id
                          ? blueActionIcon
                          : '../images/gray-action-icon.svg'
                      }
                      alt="_actions"
                    />
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <CommonModal
        title=""
        children={
          <TriagesModalContent
            modalContent={modalContent}
            handleCancelModal={handleCancelModal}
          />
        }
        isModalOpen={open}
        handleCancel={handleCancelModal}
      />
     


    </>
    )
}

export default Triages
