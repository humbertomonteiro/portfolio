import '../pagesNotes.css'

import PagesNotesLinks from '../PagesNotesLinks'

import { FaReact } from 'react-icons/fa'

export default function Github() {
    return (
        <div className="pages-notes-container">
            <PagesNotesLinks />

            <div className="div-bg">
                <FaReact className='div-bg-icon' />    
            </div>

            <h1>Aprenda React JS</h1>
            <div className='pages-notes'>
                <div className='pages-notes-text'>
                    <h2>Em Breve</h2>
                </div>
            </div>

        </div>
    )
}