import React from "react";
import HumburgerMenuIcon from "../atoms/icons/HumburgerMenuIcon";
import UserCircleIcon from "../atoms/icons/UserCircleIcon";
import BellIcon from "../atoms/icons/BellIcon";
import { useSidebar } from "../../context/SidebarContext";

export default function TopBar() {
  const { toggle } = useSidebar();
  return (
    <header className="p-[15px] bg-primary rounded-[10px] flex justify-between w-full mb-[25px]">
      <button className="cursor-pointer" onClick={toggle}>
        <HumburgerMenuIcon />
      </button>
      <div className="flex gap-[25px] items-center">
        <BellIcon />
        <UserCircleIcon />
      </div>
    </header>
  );
}
