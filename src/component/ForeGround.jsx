import React, { useRef } from 'react'
import Card from './Card'

const ForeGround = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Todo. txt is a system of formatting plain text files for task and project management.",
      filesize: ".9kb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle : "Download Now",
        tagColor : "green",
      },
    },
    {
      desc: "Todo. txt is a system of formatting plain text files for task and project management.",
      filesize: ".9kb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle : "Download Now",
        tagColor : "yellow",
      },
    },
    {
      desc: "Todo. txt is a system of formatting plain text files for task and project management.",
      filesize: ".9kb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle : "Download Now",
        tagColor : "sky",
      },
    },
  ]

  return (
    <div ref={ref} className='sm:relative fixed top-0 left-0 z-[3] w-full h-full flex overflow-auto flex-wrap sm:flex-row gap-10 p-5'>
      {data.map((item, index)=>(
        <Card data={item } reference={ref} key={index}/>
      ))}
    </div> 
  )
}

export default ForeGround