import React from 'react'

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
   const arr=["Home","About","Projects","Contact"]
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all ease-in-out duration-300 ${menuOpen?"opacity-100 h-screen pointer-events-auto":"h-0 pointer-events-none opacity-0"}`}>
          <button onClick={()=>setMenuOpen(false)} className='absolute text-white right-6 top-6 text-3xl cursor-pointer focus:outline-none ' aria-label='Close Menu'>
            &times;
          </button>
          {
            arr.map((item,index)=>
            <a key={index} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>{item}</a>)
          }
        </div>
    )
}

export default MobileMenu