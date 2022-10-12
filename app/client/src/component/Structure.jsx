import React from "react";
import './struture.css'
import Card from './Card.jsx'
const Button =(props)=>{
    let {name} = props;
    return (
        <button  type="button" className=" mt-4 btn btn-warning"> {name}</button>
    );
}

const Structure = () => {
  return (
    <main className="app">
      <div className="top-bar">
        <div className="text-white font-bold text-2xl">WEB3Logo</div>
            <Button name='Connect Wallet'/>
      </div>
      <div className="content-section">
        <div className="nav-bar"> 
          <Button name='Virtual Lands' />
          <Button name='Virtual Properties' /> 
        </div>
        <div className="main-content d-flex flex-row">
          <div className="card m-2"><Card/></div>
          <div className="card m-2"><Card/></div>
          <div className="card m-2"><Card/></div>
          <div className="card m-2"><Card/></div>
          <div className="card m-2"><Card/></div>
        </div>
      </div>
    </main>
  );
};

export default Structure;