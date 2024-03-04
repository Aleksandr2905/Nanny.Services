import { Link, NavLink } from "react-router-dom"
import { UserMenu } from "../UserMenu/UserMenu"
import { AuthMenu } from "../../AuthMenu/AuthMenu"


export const Header = () => {
    const isLoggedIn = false;
    return (
        <>
            <Link to="/">Nanny.Services</Link>
            <div>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/nannies">Nannies</NavLink>
                {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
            </div>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </>
    )
}
