import { Route, Routes } from "react-router-dom";

const landing = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default landing;
