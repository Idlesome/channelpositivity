import { useState } from "react";
import Link from "next/link";
import { Modal } from "../../../UI/Modal";
import { SidebarContainer } from "./SidebarContainer";
import { Categories } from "./Categories";

type Props = {
  onClose: () => void;
};

export const Sidebar = ({ onClose }: Props) => {
  const [currentMenu, setCurrentMenu] = useState("mainMenu");

  let content = (
    <ul className="font-medium text-lg list-none p-0">
      <li className="p-1 pl-11 m-auto">
        <Link href="/">Home</Link>
      </li>
      <li className="p-1 pl-11 m-0">
        <a
          className="cursor-pointer"
          onClick={() => setCurrentMenu("categories")}
        >
          Categories <strong>&rsaquo;</strong>
        </a>
      </li>
    </ul>
  );
  if (currentMenu === "categories") {
    content = <Categories previousMenu={() => setCurrentMenu("mainMenu")} />;
  }

  return (
    <Modal onClick={onClose}>
      <div className="fixed min-h-screen flex flex-col w-full border-l-2 border-logo-red">
        <SidebarContainer>{content}</SidebarContainer>
      </div>
    </Modal>
  );
};
