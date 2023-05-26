import './pagesNotesLinks.css'

import { Link } from "react-router-dom"

import { useState } from 'react'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function PagesNotesLinks() {

    const [ show, setShow ] = useState(true)

    function showNotesLinks() {

        setShow(!show) 
        
        const linksPages = document.querySelector('[boxlinkspages]')

        if(show) {
            linksPages.classList.remove('hidden-links-pages')
            linksPages.classList.add('show-links-pages')
        } else {
            linksPages.classList.add('hidden-links-pages')
            linksPages.classList.remove('show-links-pages')
        }
  
    }

    return (
        <div className='pages-notes-links'>
            <div boxlinkspages='true' className="hidden-links-pages">

                <nav className='links-pages'>
                    <Link to="/git">Git</Link>
                    <Link to="/github">GitHub</Link>
                    <Link to="/node">Node JS</Link>
                    <Link to="/react">React JS</Link>
                    <Link to="/firebase">Firebase</Link>
                </nav>

            </div>
            {
                show ?
                <div onClick={showNotesLinks} className='btn-show'>
                    <span>Anotações</span>
                    <IoIosArrowDown />
                </div>   
                    :
                    <div onClick={showNotesLinks} className='btn-hidden'>
                        <IoIosArrowUp />
                        <span>Anotações</span>
                    </div>
 
            }
        </div>
    )
}