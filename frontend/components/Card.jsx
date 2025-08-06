import React from 'react'
import { format } from "date-fns"
import { Trash2 } from 'lucide-react'

const Card = (props) => {
    const formatted = format(props.date, "MM/dd/yyyy")

    const bgColors = ['bg-yellow-100', 'bg-pink-100', 'bg-green-100', 'bg-blue-100']
    const randomNumber = Math.floor(Math.random() * bgColors.length)
    const bgColor = bgColors[randomNumber]    
   

  return (
    <div className={`card ${bgColor} shadow-lg w-[180px] h-[180px] mx-auto my-4 overflow-hidden rounded-[10px] flex flex-col justify-between relative`}>
  {/* Simulate tape effect */}
  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-pink-200 rounded rotate-[-9deg] z-10"></div>
  <div className="card-body p-2 flex flex-col justify-between h-full">
    <h2 className="card-title text-s font-bold leading-tight break-words">{props.title}</h2>
    <p className="text-[10px] leading-tight overflow-hidden overflow-ellipsis whitespace-normal flex-1">{props.content}</p>
    <div className="card-actions justify-between items-center mt-1 flex w-full">
  <p className="text-[8px] text-base-content/60 truncate">{formatted}</p>
  <button className="btn btn-error btn-outline btn-xs" onClick={() => props.delete(props.id)}>
    <Trash2 size={12}/>
  </button>
</div>
  </div>
</div>
  )
  
}

export default Card