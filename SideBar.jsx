import React from 'react';
import arrow from './images/arrow.png';
import bulb from './images/bulb.png';
import hand from './images/hand.png';
import vector from './images/Vector.png';
import org from './images/org-icon.png';
import "./SideBar.css";
function SideBar() {
    return (
        <div className="sidebar">
            <h1 className="sidebar-header">HackCovid</h1>
            <div className="sidebar-itemlist">
                <div className="sidebar-itemlist__item">
                    <img src={bulb} alt="" className="sidebar-itemlist__item__image" />
                    <h5 className="sidebar-itemlist__item__heading">Urgency</h5>
                    <img src={arrow} alt="" className="sidebar-itemlist__item__arrow" />
                </div>
                <div className="sidebar-itemlist__item">
                    <img src={hand} alt="" className="sidebar-itemlist__item__image" />
                    <h5 className="sidebar-itemlist__item__heading">Services</h5>
                    <img src={arrow} alt="" className="sidebar-itemlist__item__arrow" />
                </div>
                <div className="sidebar-itemlist__item">
                    <img src={vector} alt="" className="sidebar-itemlist__item__image1" />
                    <h5 className="sidebar-itemlist__item__heading">Distance</h5>
                    <img src={arrow} alt="" className="sidebar-itemlist__item__arrow" />
                </div>
                <div className="sidebar-itemlist__item">
                    <img src={org} alt="" className="sidebar-itemlist__item__image1" />
                    <h5 className="sidebar-itemlist__item__heading">Organization</h5>
                    <img src={arrow} alt="" className="sidebar-itemlist__item__arrow" />
                </div>

            </div>

        </div>
    )
}

export default SideBar;
