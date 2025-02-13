"use client";

import Sidebar from "@/components/Sidebar";
import {useSession} from "next-auth/react";

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
  const {data, status} = useSession();
  console.log("data : ", data);

  return (
    <div className="flex w-full flex-row">
      <Sidebar status={status} />
      {children}
    </div>
  );
};

export default SidebarLayout;
