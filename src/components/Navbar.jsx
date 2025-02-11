import React from 'react'
import logo from "../assets/shamna-logo.webp"
import {  FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '> 
            <a href='/' aria-label='Home' className=''>
                <img src={logo} alt='DevDojo Logo' className='max-2' width={50} height={33}/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/hajarathu-shamna-755122273/' target='_blank' rel='nopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>
            <a href='https://github.com/Shamnahajara' target='_blank' rel='nopener noreferrer' aria-label='GitHub'>
                <FaGithub/>
            </a>
            <a href='https://www.instagram.com/sham_na002?igsh=NWN6aWozY2cwZTI3' target='_blank' rel='nopener noreferrer' aria-label='Instagram'>
                <FaInstagram/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
