import ArchiveIcon from "@/public/icons/ArchiveIcon";
import CalendarIcon from "@/public/icons/CalendarIcon";
import FlowIcon from "@/public/icons/FlowIcon";
import MedalIcon from "@/public/icons/MedalIcon";
import MemoIcon from "@/public/icons/MemoIcon";
import SideMenuItem from "./SideMenuItem";
import UserInfo from "./UserInfo";

const SIDE_MENU_LIST = [
  {
    icon: <MemoIcon />,
    title: "Memo",
  },
  {
    icon: <MedalIcon />,
    title: "Goal",
  },
  {
    icon: <FlowIcon />,
    title: "Flow",
  },
  {
    icon: <CalendarIcon />,
    title: "Calendar",
  },
  {
    icon: <ArchiveIcon />,
    title: "Archive",
  },
];

const Sidebar = () => {
  // FIX 임시 값이므로 추후 수정 필요
  const temp = {
    name: "Alice Herta",
    email: "alice@gmail.com",
  };

  return (
    <div className="bg-alice-300 flex h-screen w-[18.2%] flex-col">
      <div className="flex h-[8.06%] w-full flex-col items-center justify-center border-b border-b-gray-100">
        logo area
      </div>
      <div className="flex h-screen w-full flex-col gap-11 px-3 py-10">
        <UserInfo user={temp} />
        <div className="flex h-full flex-col gap-4">
          {SIDE_MENU_LIST.map((item) => (
            <SideMenuItem key={item.title} menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
