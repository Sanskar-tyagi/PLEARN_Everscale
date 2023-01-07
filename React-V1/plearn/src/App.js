import "./App.css";
import GameSection from "./components/GameSection";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {

  const [userAccount, setUserAccount] = useState(null);

  const handleUserAccountChange = (newUserAccount) => {
    setUserAccount(newUserAccount);
  };

  return (
    <>
      <Nav onUserAccountChange={handleUserAccountChange}></Nav>
      <Header userAccount={userAccount}/>
      <GameSection></GameSection>
    </>
  );
}

export default App;
