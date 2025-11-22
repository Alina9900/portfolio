import React, { useEffect } from 'react'

const Nav = ({menuOpen,setMenuOpen}) => {
    useEffect(()=>{
document.body.style.overflow =menuOpen?"hidden":""
    },[menuOpen])
    const arr=["Home","About","Projects","Contact"]
    return (
        <div className='z-40 fixed top-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href='#home' className='font-mono text-xl'>{" "}
                        Alina<span className='text-blue-500'>.tech{" "}</span>
                    </a>
                    {/* mobile menu */}
                    <div className='w-7 h-7 relative cursor-pointer z-40 md:hidden' onClick={()=>setMenuOpen((prev)=>!prev)}>
                        &#9776;
                    </div>
                    {/* desktop menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <ul className='flex justify-between items-center h-16 space-x-20'>
                            {
                                arr.map((item,index)=>
                                      <li key={index}><a href={`#${item.toLowerCase()}`} className='text-gray-300 hover:text-white transition-colors'>{" "} {item} {" "}</a></li>
                                )
                            }
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav