import React from 'react'
import { MdNavigateNext } from "react-icons/md";


type Props = {
    num:number
    setNum: React.Dispatch<React.SetStateAction<number>>;
};

const NextPrevBtns = ({num,setNum}:Props) => {


     const handleNextPage = () => {
       setNum((prev) => prev + 1);
       window.scrollTo({ top: 0, left: 0 });
     };

     const handlePrevPage = () => {
       setNum((prev) => prev - 1);
       window.scrollTo({ top: 0, left: 0 });
     };


  return (
    <div className="d-flex justify-content-center align-items-center gap-4 py-5">
      {num > 1 && (
        <button onClick={handlePrevPage} className="next-prev-btns">
          <MdNavigateNext className="next-icon rotate" />
          Prev
        </button>
      )}
      <span> Page {num}</span>

      <button onClick={handleNextPage} className="next-prev-btns ">
        Next <MdNavigateNext className="next-icon" />
      </button>
    </div>
  );
}

export default NextPrevBtns