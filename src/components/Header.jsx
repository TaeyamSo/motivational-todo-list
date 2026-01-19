import { NavLink } from "react-router"

function Header() {
 return(
    <header>
        <div className="logo"><NavLink to="/">TAEYAM</NavLink></div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todo">TodoList</NavLink></li>
            </ul>
        </nav>
    </header>   
 )
}

export default Header