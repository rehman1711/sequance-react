import React, {useState} from 'react'

export default function Checkbox(props) {
    
    const [currentRadioValue, setCurrentRadioValue] = useState("option1")
    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value);
      };

    if (currentRadioValue === "option1"){
        props.setdata("option1")
    }
    else{
        props.setdata("option2")
    }
    
  return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"defaultChecked value="option1" onChange={handleRadioChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">{props.title1}</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={handleRadioChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">{props.title2}</label>
            </div>
        </>
  )
}
