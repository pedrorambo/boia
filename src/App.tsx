import React from "react";
import { RecoilRoot } from "recoil";
import Buyers from "./components/Buyers";

function App() {
  return (
    <RecoilRoot>
      <Buyers />
    </RecoilRoot>
  );
}

export default App;
