import './footer.css'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <Link className='footer-home'>Portfolio</Link>
            <div className='footer-medias'>
                <a href="https://www.linkedin.com/in/humberto-monteiro-8b6684110/" target='_blanck'>Linkedin</a>
                <a href="https://www.instagram.com/humberto.fh/" target='_blanck'>Instagram</a>
                <a href="https://github.com/humbertomonteiro" target='_blanck'>GitHub</a>
            </div>

        </footer>
    )
}