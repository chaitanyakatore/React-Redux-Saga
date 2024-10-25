import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumberRequest } from "./numberSlice";
import { RootState } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state: RootState) => state.number);

  const handleFetchNumber = () => {
    dispatch(fetchNumberRequest());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Random Number Fetcher 🎲</h1>
      <button onClick={handleFetchNumber} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Random Number"}
      </button>
      <h2>{loading ? "Loading..." : `Number: ${value}`}</h2>
    </div>
  );
};

export default App;
