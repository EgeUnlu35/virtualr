import logo from '../assets/logo.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [mobilDrawerOpen, setMobileDrawerOpen] = useState(false)
    
    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobilDrawerOpen)
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex item-center flex-shrink-0">
                    <img src={logo} alt="logo" className='h-10 w-10 mr-2'/>
                    <span className='text-xl tracking-tight '>VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} >{item.label}</a>
                        </li>
                        ))}
                </ul>
                <div className="hidden justify-center item-center space-x-12 lg:flex">
                    <a href='#' className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create Account
                    </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleMobileDrawer} className='focus:outline-none'>
                        {mobilDrawerOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>

                </div>
            </div>
            <div>
                {mobilDrawerOpen &&(
                    <div className="fixed right-0 bg-neutral-900 w-full p-12 
                                    flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}    
                        </ul>                
                        <div className="flex space-x-6">
                            <a href='#' className='py-2 px-3 rounded-md border'>
                                Sign In
                            </a>
                            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                                Create Account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar