import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const username = window.localStorage.getItem("username")

    const navigate = useNavigate()

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID")
        window.localStorage.removeItem("username")
        
        navigate("/auth")
    }

    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>

            {!cookies.access_token ? (
                <Link to="/auth">Login / Register</Link>
            ) : (
                <>
                    <Link to="/saved-recipes">Saved Recipes</Link>
                    <button className='btn' onClick={logout}>Logout {username}</button>
                </>
            )}
            
        </div>
    )
}

export default Nav