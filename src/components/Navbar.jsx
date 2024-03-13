import { NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import UserIcon from "./UserIcon.jsx";

export default function Navbar(){
    return (
        <nav className="nav_container">
            <NavLink to="/articles" className="header">
                <Header/>
            </NavLink>
            <div className="nav_menu" id="nav_menu">
                <UserIcon/>
            </div>
                
        </nav> 
    )
}