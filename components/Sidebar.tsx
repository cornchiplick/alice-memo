"use client";

import {URL} from "@/constants/constants";
import usePathList from "@/hook/usePathList";
import ArchiveIcon from "@/public/icons/ArchiveIcon";
import CalendarIcon from "@/public/icons/CalendarIcon";
import FlowIcon from "@/public/icons/FlowIcon";
import MedalIcon from "@/public/icons/MedalIcon";
import MemoIcon from "@/public/icons/MemoIcon";
import Link from "next/link";
import SideMenuItem from "./SideMenuItem";
import UserInfo from "./UserInfo";

const SIDE_MENU_LIST = [
  {
    icon: <MemoIcon />,
    title: "Memo",
    path: URL.MEMO,
  },
  {
    icon: <MedalIcon />,
    title: "Goal",
    path: URL.GOAL,
  },
  {
    icon: <FlowIcon />,
    title: "Flow",
    path: URL.FLOW,
  },
  {
    icon: <CalendarIcon />,
    title: "Calendar",
    path: URL.CALENDAR,
  },
  {
    icon: <ArchiveIcon />,
    title: "Archive",
    path: URL.ARCHIVE,
  },
];

const Sidebar = () => {
  // FIX 임시 값이므로 추후 수정 필요
  const temp = {
    name: "Alice Herta",
    email: "alice@gmail.com",
  };
  const {pathList} = usePathList();
  const [baseMenu] = pathList;

  return (
    <div className="flex h-screen w-[18.2%] flex-col bg-alice-300">
      <div className="flex h-[8.06%] w-full flex-col items-center justify-center border-b border-b-gray-100">
        <Link href={URL.HOME}>
          <p>logo area (to home)</p>
        </Link>
      </div>
      <div className="flex h-screen w-full flex-col gap-11 px-3 py-10">
        <UserInfo user={temp} />
        <div className="flex h-full flex-col gap-4">
          {SIDE_MENU_LIST.map((item) => (
            <SideMenuItem key={item.title} menu={item} isActive={baseMenu === item.path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
