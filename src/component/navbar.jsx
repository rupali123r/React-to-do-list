import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-violet-800 text-white'>
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
<ul className="flex gap-8"> 
<li className='cursor-pointer hover:font-bold transition-all '>Home</li>
<li className='cursor-pointer hover:font-bold transition-all '> Your Tasks</li></ul>
    </nav>
  )
}
