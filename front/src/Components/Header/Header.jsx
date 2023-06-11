import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return (

        <div>
            <Link to='/'><div className="header">
                <h1>Mis fotos favoritas</h1>
            </div></Link>
            <div className="header-barBlack"></div>
        </div>

    )
}

export default Header;