import React from "react";
import './styles/Section.css'
import riyas from './assets/myphoto.jpeg'

const Section = () => {
    return (
        <div className="section">
            <div className="section__container">
                <div className="section__img">
                    <img src={riyas} alt="" />
                </div>

                <div className="section__content">
                    <h1>Riyas Anamchirakkal</h1>
                    <p>Experience in backend development</p>
                    <p>Web Development</p>
                    <p>Python Django</p>
                    <p>Docker</p>
                    <p>PostgreSQL</p>
                    <p>Golang</p>
                    <p>REST API</p>
                </div>
            </div>
        </div>
    )
}

export default Section;