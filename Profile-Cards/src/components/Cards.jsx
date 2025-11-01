import React from 'react'

const Cards = ({emp}) => {
  return (
    <div>
        <div className='card'>
            <img src={emp.image} alt="Profile-Photo" />
        </div>
        <div>
            <h4>Name: {emp.name}</h4>
            <h4>Role: {emp.role}</h4>
        </div>
    </div>
  )
}

export default Cards