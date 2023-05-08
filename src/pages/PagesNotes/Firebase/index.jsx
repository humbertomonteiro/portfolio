import '../pagesNotes.css'

import PagesNotesLinks from '../PagesNotesLinks'

import { SiFirebase } from 'react-icons/si'

export default function Firebase() {
    return (
        <div className="pages-notes-container">
            <PagesNotesLinks />

            <div className="div-bg">
                <SiFirebase className='div-bg-icon' />    
            </div>

            <h1>Aprenda Firebase + React JS</h1>
            <div className='pages-notes'>
                <div className='pages-notes-text'>
                    <h2>Em Breve</h2>
                </div>
            </div>
        </div>
    )
}