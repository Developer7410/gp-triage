import modalCrossIcon from "../public/images/modal-cross-icon.svg";
import logo from '../public/images/logo.svg';
import Image from "next/image";
import bgImage from '../public/images/modal-bg.png';
import CommonModal from "./CommonModel/CommonModal";

function AdminQueriesModalContent({ modalContent, handleCancelModal }) {
  return (
    <>
    

    <div
      className="flex pt-5 pb-20 px-10 flex-col gap-3"
    >
      <div className="flex justify-end items-center w-full">
       
      </div>
      <div className="absolute left-0 -top-5 -z-1"> 

      <Image
          src={bgImage}
          alt="_close"
          className="cursor-pointer z-20"
          onClick={handleCancelModal}
          />
          </div>
          <div className="absolute right-10 top-2">

<Image
  src={modalCrossIcon}
  alt="_close"
  className="cursor-pointer"
  onClick={handleCancelModal}
/>
</div>
      <div className="w-full flex flex-col gap-12 justify-start max-w-[464px] absolute top-10 pb-4">
     

      <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-bold leading-normal text-[#06152B]">
                {modalContent.patient}
              </p>
              <div className="flex flex-col">
                <p className="text-base text-[#06152B]">
                  <span className="font-medium">Request Date:</span>
                  {modalContent.requestDate}
                </p>
                <p className="text-base text-[#06152B]">
                  <span className="font-medium">Query Type:</span>
                  {modalContent.queryType}
                </p>
                <p className="text-base text-[#06152B]">
                  <span className="font-medium">Assigned To:</span>
                  {modalContent.assignedTo}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#06152B] font-medium">
                Further Details:
              </p>
              <div className="border border-[#D0D0D0] rounded-lg p-4 bg-white max-w-[569px]">
                {modalContent.furtherDetails}
              </div>
            </div>
          </div>
        <Image src={logo} alt="_logo" className="w-[66px] h-[65px] pb-4" />
      </div>
    </div>
  

  </>
  );
}

export default AdminQueriesModalContent;
