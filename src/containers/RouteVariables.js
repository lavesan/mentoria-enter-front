import React from "react";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const RouteVariables = () => {
  const query = useQuery();
  const { id } = useParams();

  return (
    <div>
      <p>ID: {id}</p>
      <p>Query string: {query.get("name")}</p>
    </div>
  );
};

export default RouteVariables;
