import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';




const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "home"
    },
    {
        id: 2,
        name: "About",
        path: "about"
    },
    {
        id: 3,
        name: "Contact",
        path: "contact"
    },
    {
        id: 4,
        name: "Service",
        path: "service"
    },
    {
        id: 5,
        name: "Blog",
        path: "blog"
    },
]


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navLinks.map(route => <Link route={route} key={route.id}></Link>)

    return (

        <nav className='flex justify-between mx-5 my-5'>
            <span className='flex'  onClick={()=> setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 ${open ? "top-8" : "-top-40"} w-[50%] bg-amber-200 px-4 py-4`}>
                    {links}
                </ul>
                <h3>Brand</h3>
            </span>
            <ul className="md:flex hidden">
                {
                    links
                }
            </ul>
            <button>Sign In</button>
        </nav>

        // <nav>
        //     <ul className='flex'>
        //         {
        //             navLinks.map(route => <li className='mr-10'><a href={route.path} key={route.id}>{route.name}</a></li>)
        //         }
        //     </ul>
        // </nav>

        // <nav>
        //    <ul className='flex'>
        //         <li className='mr-10'><a href="/home">Home</a></li>
        //         <li className='mr-10'><a href="/about">About</a></li>
        //         <li className='mr-10'><a href="/contact">Contact</a></li>
        //     </ul> 
        // </nav>

        
    );
};

export default NavBar;