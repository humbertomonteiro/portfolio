import './pagesNotesLinks.css'

import { Link } from "react-router-dom"

import { useState } from 'react'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { notes } from '../../dates/ArrayNotes'

export default function PagesNotesLinks() {

    const [ show, setShow ] = useState(false)

    function showNotesLinks() {

        setShow(!show) 
        window.scroll(0, 0)
        
    }

    function showNotesLinksButton() {

        setShow(!show) 
        
    }

    return (
        <div className='pages-notes-links'>
            <div boxlinkspages='true' className={show ? 'show-links-pages' : 'hidden-links-pages'}>

                <nav className='links-pages'>

                    {
                    notes.map(e => (
                        <>
                        <Link onClick={showNotesLinks} 
                        to={`/pages-notes/${e.id}`}
                        >{e.title}</Link>
                        </>
                    ))
                    }
                </nav>

            </div>
            {
                !show ?
                <div onClick={showNotesLinksButton} className='btn-show'>
                    <span>Anotações</span>
                    <IoIosArrowDown />
                </div>   
                    :
                    <div onClick={showNotesLinksButton} className='btn-hidden'>
                        <IoIosArrowUp />
                        <span>Anotações</span>
                    </div>
 
            }
        </div>
    )
}