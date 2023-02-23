import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  return {
    page,
    setPage,
    count,
    setCount,
  };
};
