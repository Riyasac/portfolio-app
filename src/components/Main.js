import React from "react";
import './styles/Main.css'
import { MdFacebook, MdOutlineWhatsapp, MdEmail } from "react-icons/md";
import riyas from './assets/myphoto.jpeg'

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p>Hello Everyone !</p>
                        <h1>I am Riyas</h1>
                        <p>Backend Developer & Designer</p>

                        <div className="icons">
                            <MdFacebook className="icon"/>
                            <MdOutlineWhatsapp className="icon"/>
                            <MdEmail className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>


                </div>
                    <div className="main__img">
                        <img src={riyas} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Main;