import React from 'react';
import "./Body.css";
import img1 from './website.png';
function Body() {
    return (
        <div className="container">
            <div className="container-text">
                <div className="container-text__texts">
                    <h1>
                        In These Trying Times, Lend Helping Hand
                    </h1>
                    <p>
                        Are you looking for volunteering opportunities where you can help contribute to the long term goals and success of local NGOs? HackCovid’s projects enable you to take on a range of tasks, which include administration, research, marketing, fundraising, IT support, website development and teaching! Find a task that interests you and connect with us!
                    </p>
                </div>
            </div>
            <div className="container-image">
                <img className="container-image__2peeps" src={img1} />
            </div>

        </div>
    )
}

export default Body;
