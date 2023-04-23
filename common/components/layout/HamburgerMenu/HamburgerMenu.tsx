import { useState } from "react";
import { Sidebar } from "./Sidebar/Sidebar";

export const HamburgerMenu = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const hideModalHandler = () => {
    setIsModal(false);
  };
  const showModalHandler = () => {
    setIsModal(true);
  };
  return (
    <>
      <div
        className="cursor-pointer my-auto align-self-end"
        onClick={showModalHandler}
      >
        <div className="w-7 h-1 bg-black m-1 rounded-full"></div>
        <div className="w-7 h-1 bg-black m-1 rounded-full"></div>
        <div className="w-7 h-1 bg-black m-1 rounded-full"></div>
      </div>
      {isModal && <Sidebar onClose={hideModalHandler} />}
    </>
  );
};
