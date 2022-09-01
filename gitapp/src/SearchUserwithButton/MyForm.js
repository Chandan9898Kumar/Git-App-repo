import React from 'react'

 const MyForms = ({value,onChanges,submitButton}) => {
  return (
    <>
    <input
    type="text"
    value={value}
    onChange={(e)=>onChanges(e)}
    />
    <button
    type="submit"
    onClick={(e)=>submitButton(e)}
    >Click Here</button>
    </>
  )
}

export default MyForms
