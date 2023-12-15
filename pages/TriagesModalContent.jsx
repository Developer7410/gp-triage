import modalCrossIcon from "../public/images/modal-cross-icon.svg";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import bgImage from '../public/images/modal-bg.png';
function TriagesModalContent({ modalContent, handleCancelModal }) {
  return (
    <>
  

      <div
        className="flex pt-5 pb-20 px-10 flex-col gap-3"
        style={{ backgroundImage: `url(${bgImage})` }}
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
       

          <div className="flex flex-col gap-3 justify-start">
            <p className="text-4xl font-bold leading-normal text-[#06152B]">
              {modalContent.name}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-4">
                <p className="text-base text-[#06152B]">
                  <span className="font-medium">Age:</span>
                  {modalContent.age}
                </p>
                <p className="text-base text-[#06152B]">
                  <span className="font-medium">Triage Date:</span>
                  {modalContent.date}
                </p>
              </div>
              <p className="text-base text-[#06152B]">
                <span className="font-medium">Initial Complaint:</span>
                {modalContent.presentingComplaint}
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-base text-[#06152B] font-medium">
                  Other Problems or Symptoms:
                </p>
                <ul>
                  {modalContent.otherProblems.map((problem) => (
                    <li>• {problem}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base text-[#06152B] font-medium">
                  Possible Causes:
                </p>
                <ul>
                  {modalContent.possibleCauses.map((cause) => (
                    <li>{cause}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Image src={logo} alt="_logo" className="w-[66px] h-[65px] pb-4" />
        </div>
      </div>
    

    </>
  );
}

export default TriagesModalContent;
