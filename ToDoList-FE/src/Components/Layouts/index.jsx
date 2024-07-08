import Header from "./Header";
import Home from "../../Home";
import { useState } from "react";

const Index = () => {
  const [header, setHeader] = useState("Home");
  console.log(header);
  return (
    <>
      <div className="w-full h-full">
        <Header setHeader={setHeader} />
        <Home header={header} />
      </div>
    </>
  );
};
export default Index;
