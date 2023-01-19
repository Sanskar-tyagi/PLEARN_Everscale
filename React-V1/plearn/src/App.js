import "./App.css";
import GameSection from "./components/GameSection";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ShowCase from "./components/ShowCase";
import { useState } from "react";
import BreadCrums from "./components/Breadcrum";
import CTAsection from "./components/CTAsection";
import Hype from "./components/Hype";
import Gamedes from "./components/Gamedes";

function App() {
  const [userAccount, setUserAccount] = useState(null);

  const handleUserAccountChange = (newUserAccount) => {
    setUserAccount(newUserAccount);
  };

  return (
    <>
      <Nav onUserAccountChange={handleUserAccountChange}></Nav>{" "}
      {/* retrieving userAccount from Nav component and passing the userAccount to the function above */}
      <Header userAccount={userAccount} />
      <GameSection></GameSection>
      <ShowCase />
      <div className="vidbg">
        <BreadCrums></BreadCrums>
        <Gamedes></Gamedes>
        <Hype></Hype>
        <CTAsection></CTAsection>
      </div>
    </>
  );
}

export default App;
