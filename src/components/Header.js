import React, { useState } from "react";
import './styles/Header.css'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";

const Header = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className="header">
            <div className="header__logo">
                <h1>Riyas</h1>
            </div>

            <nav>
                <ul>
                    <div className="closed">
                        <AiOutlineClose className='close' onClick={showMenu} />
                    </div>

                    <li>
                        <Link to='/'><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>About</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>Blog</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>Contact</b></Link>
                    </li>
                </ul>
            </nav>

            <div className="changer">
                <MdOutlineMenuBook className="menu" onClick={showMenu}/>
            </div>
        </div>
    )
}

export default Header;