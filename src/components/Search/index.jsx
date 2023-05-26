import './search.css'

import { useState } from "react";

import { BsSearch } from 'react-icons/bs'

export default function Search() {
    const [ iconSearch, setIconSearch ] = useState(false)
    const [ search, setSearch ] = useState('')

    function handleIcon() {

        setIconSearch(!iconSearch)  
        
    }

    function handleSearch() {
        
        const getFilters = document.querySelectorAll('.filter')
        
        Array.from(getFilters).filter(iten => {
            const words = iten.innerText.toLowerCase()
            return !words.includes(search)
        })
        .forEach(a => {
            a.classList.add('hidden')
        })

        Array.from(getFilters).filter(iten => {

            const words = iten.innerText.toLowerCase()
            
            return words.includes(search.toLowerCase())
        })
        .forEach(a => {
            a.classList.remove('hidden')
        })

    }

    return (
        <>
            {
                iconSearch ?
                <div className='div-search'>
                    <input
                    autoFocus
                    type="text"
                    placeholder='Procurar tópico...'
                    onChange={e => setSearch(e.target.value)}
                    onInput={handleSearch}
                    />
                    <BsSearch onClick={handleIcon} className='div-search-icon'/>
                </div>
                : 
                <div className='div-search'>
                    
                    <BsSearch onClick={handleIcon} className='div-search-icon'/>
                    
                </div>

            }
        </>
    )
    
}