import {Link, NavLink} from 'react-router-dom'


let Navbar = ()=>{
    return (
        <nav className="nav-wrapper teal darken-1">
            <div className="container">
                <Link className="brand-logo" to="/">Trello like</Link>
                <ul className="right">
                    <li><NavLink to="/">application</NavLink></li>
                    <li><NavLink to="https://github.com/niux3" target="_blank">github</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar