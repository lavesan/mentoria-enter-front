import { useEffect } from "react";
import { usePagination } from "../hooks/usePagination";

const CustomHook = () => {
  const { page, count, setPage } = usePagination();

  useEffect(() => {
    setTimeout(() => {
      setPage(2);
    }, 2000);
  }, [setPage]);

  return (
    <>
      <p>Page: {page}</p>
      <p>Count: {count}</p>
    </>
  );
};

export default CustomHook;
