import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "motion/react";

const Card = ({ data,reference }) => {
    const colorMap = {
        green: "bg-green-600",
        yellow: "bg-yellow-600",
        sky: "bg-sky-600",
      };

    return (
        <motion.div drag 
        dragConstraints={reference} 
        // dragMomentum={false} 
        whileDrag={{scale: 1.1}} 
        dragElastic={0.1} 
        dragTransition={{bounceStiffness: 100, bounceDamping: 30 }}
        className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-7 py-10 overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm leading-tight mt-5 font-medium'>
                {data.desc}
            </p>
            
            <div className='footer absolute w-full bottom-0 left-0'>
                <div className='flex justify-between items-center px-6 py-2 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
                        {
                            data.close ? <IoIosCloseCircleOutline size=".8em" color='#fff' /> : <LuDownload size=".8em" color='#fff' />
                        }
                    </span>
                </div>

                {data.tag.isOpen &&
                    <div className={`tag w-full py-5 ${colorMap[data.tag.tagColor]} flex justify-center items-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                }

            </div>
        </motion.div>
    )
}

export default Card