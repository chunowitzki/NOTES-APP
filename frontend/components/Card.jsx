import React from 'react'
import { format } from "date-fns"

const Card = (props) => {
    const formatted = format(props.date, "MM/dd/yyyy")
  return (
    <div className="card bg-base-100 shadow-md w-full max-w-md mx-auto my-4">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        <p className="text-xs text-base-content/60">{formatted}</p>
        <div className="card-actions justify-end mt-2">
          <button
            className="btn btn-error btn-sm"
            onClick={() => props.delete(props.id)}
          >
            Delete
          </button>
          {/* Example: DaisyUI primary button */}
          <button className="btn btn-primary btn-sm">Test Button</button>
        </div>
      </div>
    </div>
  )
  
}

export default Card