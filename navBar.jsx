import React from 'react';
import "./NavBar.css";
function NavBar() {
    return (
        <div className="navBar">

            <div className="navBar-logo">

                <h1>Hack<span>Covid</span></h1>

            </div>
            <div className="navBar-itemlist ">
                <div className="navBar-items ">

                    <div className="navBar-item ">
                        <a className="navBar-item__link" href="#">HOME</a>
                    </div>

                    <div className="navBar-item ">
                        <a className="navBar-item__link" href="#">VOLUNTEER</a>
                    </div>
                    <div className="navBar-item ">
                        <a className="navBar-item__link" href="#">NGO</a>
                    </div>
                </div>

                <div className="navBar-account">
                    <div className="navBar-account__image">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsnappa.com%2Fcreate%2Fprofile-pictures&psig=AOvVaw0tZjczsOV_-ouBr-MJbmRN&ust=1626256121086000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLC3r63i3_ECFQAAAAAdAAAAABAE"
                            className="navBar-account__image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
