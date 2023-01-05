import "./App.css";
import GameSection from "./components/GameSection";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <>
      <Nav setUserLoggedIn={setUserLoggedIn}></Nav>
      <Header userLoggedIn={userLoggedIn}/>
      <GameSection></GameSection>
    </>
  );
}

export default App;
