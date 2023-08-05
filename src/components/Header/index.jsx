import './header.css'
import { Link } from 'react-router-dom'

import { GoThreeBars } from 'react-icons/go'

import { useState } from 'react'

export default function Header() {

    const [ toggle, setToggle ] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
        window.scroll(0, 0)
    }

    function handleBars() {
        setToggle(!toggle)
    }

    return (
        <div className='header'>
            <Link className='logo' to='/'>Portfolio</ Link>

            <nav className={toggle ? 'show-links' : 'links'}>
                <Link onClick={handleToggle} to='/'>Home</Link>
                <Link onClick={handleToggle} to='/profile' >Portfolio</Link>
                <Link onClick={handleToggle} to='/projects'>Projetos</Link>
                <Link onClick={handleToggle} to='/notes' >Anotações</Link>
            </nav>

            <GoThreeBars onClick={handleBars} className='bars' />

        </div>
    )
}