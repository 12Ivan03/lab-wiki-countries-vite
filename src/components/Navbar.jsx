
import { Link } from "react-router-dom";

function Navbar() {

    return(
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><Link to={'/'}>WikiCountries</Link></span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;