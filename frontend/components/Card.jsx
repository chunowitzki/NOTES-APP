import React from 'react'
import { format } from "date-fns"

const Card = (props) => {
    const formatted = format(props.date, "MM/dd/yyyy")
  return (
    <>
        <h3>{props.title}</h3>
        <h5>{props.content}</h5>
        <p>{formatted}</p>
        <button onClick={()=> props.delete(props.id)}>delete</button>
    </>
  )
}

export default Card