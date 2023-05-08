import './header.css'
import { Link } from 'react-router-dom'

import { GoThreeBars } from 'react-icons/go'

export default function Header() {

    function showLinks() {
        
        const links = document.querySelector('.links')

        links.classList.toggle('links-hidden')
        links.classList.toggle('show-links')
    }

    return (
        <div className='header'>
            <Link className='logo' to='/'>Portfolio</ Link>

            <nav className='links'>
                <Link to='/'>Home</Link>
                <Link to='/profile' >Portifolio</Link>
                <Link to='/notes' >Anotações</Link>
                <Link to='/projects'>Projetos</Link>
            </nav>

            <GoThreeBars onClick={showLinks} className='bars links-hidden' />

        </div>
    )
}