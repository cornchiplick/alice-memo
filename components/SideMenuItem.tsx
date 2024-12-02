import React from "react";

interface SideMenuItemProps {
  menu: {
    icon: React.ReactNode;
    title: string;
  };
  isActive?: boolean;
}

const SideMenuItem = ({menu, isActive = false}: SideMenuItemProps) => {
  const {icon, title} = menu;

  return (
    <div
      className={`${isActive ? "bg-alice-400" : "bg-alice-300"} flex flex-row gap-5 rounded-lg p-2 hover:cursor-pointer`}>
      {icon}
      {title}
    </div>
  );
};

export default SideMenuItem;