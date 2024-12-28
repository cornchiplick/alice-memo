import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex w-full flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
