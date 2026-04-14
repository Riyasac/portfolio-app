import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import './styles/Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <Link to="/">
                <MdArrowBack className="arrow" />
            </Link>

            <div className="inputs">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" className="message"/>
                <div className="buttons">
                <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;