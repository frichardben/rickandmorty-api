import React from 'react'

export const Loading = () => {
  const numbers = Object.keys(new Array(20).fill(null))

  return (
    <>
      {numbers.map((item) => (
        <div className="skeleton" key={item}></div>
      ))}
    </>
  )
}
