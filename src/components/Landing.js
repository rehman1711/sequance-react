import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import axios from "axios";


export default function Landing (props) {

  const [isTeam, setIsTeam] = useState('option1');
  const [player,setPlayer] = useState('');
  const [team,setTeam] = useState('');
  let dropdisable 
  let buttonEnable 

  if(isTeam === "option1"){
    dropdisable = true;
    buttonEnable = player !== '' 
  }
  else if (isTeam === "option2" ){
    buttonEnable = player !== '' && team !== ''
    dropdisable = false;
  }
  else{
    buttonEnable = false;
  }
  console.log('buttonEnable',buttonEnable)
  console.log("Is Team" , isTeam)
  console.log("player" , player)
  console.log("Team" , team)

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/initial`, 
    {
      "isteam" : isTeam,
      "player" : player,
      "team" : team
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  return (
    <>
      <div className="first-screen">
        <div className="container custom">
          <div className="">
            <h1 className="main-heading">{props.title}</h1>
          </div>
          <div className="check-box">
            <Checkbox
              title1={"Check For Sigle Player"}
              title2={"Check For Teams"}
              setdata = {setIsTeam}
              value={isTeam}

              />
          </div>
          <div className="drop-down-1">
            <Dropdown
              disabled={false}
              value={player}
              setValue={setPlayer}
              heading={"No. Of Players or Teams"}
            />
          </div>
          <div className="drop-down-2">
            <Dropdown
              disabled={dropdisable}
              value={team}
              setValue={setTeam}
              heading={"No. of players In Teams"}
            />
          </div>
          <div className="custom-btn">
            <button type="button" className="btn btn-light" disabled={!buttonEnable} onClick = {handleSubmit}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
