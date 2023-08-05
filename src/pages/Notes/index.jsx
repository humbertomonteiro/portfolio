import './notes.css'

import { notes } from '../../dates/ArrayNotes'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function Notes() {
    return(
        <motion.div 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: .5 }} className='notes-container'>
            <h1>Minhas anotações</h1>
            <div className="notes">
                {
                    notes.map(e => (
                        <div className="note" key={e.id}>
                            <div className="note-icon">
                                {e.icon}
                            </div>
                            <div className="note-text">
                                <h2>{e.title}</h2>
                                <p>
                                    {e.description}
                                </p>
                                <div className='note-btn'>
                                    <Link  to={`/pages-notes/${e.id}`}>Abrir</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}