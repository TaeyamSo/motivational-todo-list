import { NavLink } from "react-router"

function Header() {
 return(
    <header>
        <div className="logo"><NavLink to="/motivational-todo-list/">TAEYAM</NavLink></div>
        <nav>
            <ul>
                <li><NavLink to="/motivational-todo-list/">Home</NavLink></li>
                <li><NavLink to="/motivational-todo-list/todo">TodoList</NavLink></li>
            </ul>
        </nav>
    </header>   
 )
}

export default Header