import { Link } from "react-router-dom"

export default function PagesNotesLinks() {
    return (
        <div className="pages-note-links">

            <Link to="/git">Git</Link>
            <Link to="/github">GitHub</Link>
            <Link to="/node">Node JS</Link>
            <Link to="/react">React JS</Link>
            <Link to="/firebase">Firebase</Link>

        </div>
    )
}