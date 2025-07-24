import React from 'react'

const Button = ({children, handleClick}) => {
  return (
    <button
      type="submit"
      className={"bg-[#F0F0C9] p-2 rounded-lg text-[#6E0E0A] text-lg cursor-pointer"}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
export default Button
