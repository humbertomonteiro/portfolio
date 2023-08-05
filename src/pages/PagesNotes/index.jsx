import './pagesNotes.css'

import { motion } from 'framer-motion'
import PagesNotesLinks from '../../components/PagesNotesLinks'
import Search from '../../components/Search'

import { notes } from '../../dates/ArrayNotes'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function PagesNotes() {

    const { id } = useParams()

    const [ note, setNote ] = useState([])

    useEffect(() => {
        function getNote() {
            const note = notes.filter(e => e.id === id)
            setNote(note)
        }

        getNote()
    }, [id])

    return(
        <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ duration: .5 }}
        className="pages-notes-container">
            <PagesNotesLinks />
            <Search />
        <>
            {
                note.map(e => (
                    <div className='pages-notes' key={e.id}>
                        <div className="div-bg">
                            {e.icon}
                        </div>
                        <h1>{e.title}</h1>
                        {e.component}
                    </div>
                ))
            }
        </>

        </motion.div>
    )
}