import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div aria-label="werwer" className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
