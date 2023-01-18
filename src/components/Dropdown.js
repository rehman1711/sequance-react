import React from 'react'

export default function Dropdown({disabled,setValue,heading}) {

 
  return (
        <>
            <select  onChange={(event) => {setValue(event.target.value)}} className="form-select" disabled = {disabled}>
                <option selected>{heading}</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
        </>
  )
}
