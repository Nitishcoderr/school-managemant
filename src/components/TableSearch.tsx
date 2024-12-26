import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div>
      <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
              <Image src={"/search.png"} width={14} height={14} alt='Search' />
              <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
            </div> 
    </div>
  )
}

export default TableSearch
