import {usePathname, useSearchParams} from "next/navigation";

const usePathList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const basePath = pathname.split("?")[0];
  const pathList = basePath
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment) => `/${segment}`);

  return {
    pathname,
    searchParams,
    basePath,
    pathList,
  };
};

export default usePathList;
