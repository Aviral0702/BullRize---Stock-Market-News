import React from 'react'
import logo from "../file.png"  
function NavBar() {
    return (
        <div className=''>
            <nav className='navbar '>
                <div className='nav-container  flex flex-row justify-between py-4 px-7 items-center bg-slate-300 shadow-xl'>
                    <div className='nav-logo flex items-center'>
                       <a href='/'><img src={logo} alt="No pic" className=' h-16 w-18' /></a>
                        <h1>Bullrize</h1>
                    </div>
                    <div className='nav-links flex gap-16'>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/stocks'>Stocks</a>
                        <a href='/profile'>Profile</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
