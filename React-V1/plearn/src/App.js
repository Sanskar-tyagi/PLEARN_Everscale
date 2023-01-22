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
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Toke from "./components/toke";

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
      <Gamedes></Gamedes>
      <div className="vidbg">
        <BreadCrums></BreadCrums>
        <ShowCase />
        <Toke />
        <Faq></Faq>
        <CTAsection></CTAsection>{" "}
      </div>
      <Footer />
    </>
  );
}

export default App;
