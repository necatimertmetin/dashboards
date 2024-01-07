import React, { useState } from "react";
import '../../../assets/css/AdminNavbar.css';
import searchIcon from '../../../assets/media/search.png';
import userIcon from '../../../assets/media/user.png';
import settingsIcon from '../../../assets/media/settings.png';
import flagIcon from '../../../assets/media/flag.png';
import checkedIcon from '../../../assets/media/checked.png';
import widgetIcon from '../../../assets/media/widget.png';
const Navbar = () => {
    const [searchState, setSearchState] = useState(false);
    const [userState, setUserState] = useState(false);
    const [navbarActiveItem, setNavbarActiveItem] = useState(false);
    const handleSearchClick = () => {
        setSearchState(!searchState);
    }
    const handleUserClick = () => {
        setUserState(!userState);
    }
    const handleNavbarItemClick = (index) => {
        setNavbarActiveItem(index)
    }
    const items = [
        'Dashboard',
        'Advance Query',
        'Events',
    ];

    return (
        <nav className="dashboard-navbar">
            <div className="dashboard-navbar-left">

                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`dashboard-navbar-item ${navbarActiveItem === index ? 'dashboard-navbar-item-active' : ''}`}
                        onClick={() => handleNavbarItemClick(index)}
                    >
                        {item}
                    </div>
                ))}
                <div className="separator" />
                <div className="dashboard-navbar-search">
                    <img className={`dashboard-navbar-search-img ${searchState ? 'dashboard-navbar-search-img-active' : ''}`} src={searchIcon} alt="search" onClick={() => {
                        handleSearchClick();
                    }} />
                    <input className={`dashboard-navbar-search-input ${searchState ? 'dashboard-navbar-search-input-active' : ''}`} type="text" />
                </div>


            </div>

            <div className="dashboard-navbar-right">
                <div className="dashboard-navbar-user-container">
                    <div className="dashboard-navbar-user-title">Mert METIN</div>
                    <img className="dashboard-navbar-user-img" src={userIcon} alt="icon" onClick={() => {
                        handleUserClick();
                    }} />
                    <div className={`dashboard-navbar-user-collapsible ${userState ? 'dashboard-navbar-user-collapsible-extended' : ''}`}>
                        <div className="dashboard-navbar-user-collapsible-item">
                            <img className="dashboard-navbar-user-collapsible-item-img" src={settingsIcon} alt="icon" />
                            <div className="dashboard-navbar-user-collapsible-item-title">
                                Settings
                            </div>
                        </div>
                        <div className="dashboard-navbar-user-collapsible-item">
                            <img className="dashboard-navbar-user-collapsible-item-img" src={flagIcon} alt="icon" />
                            <div className="dashboard-navbar-user-collapsible-item-title">
                                Notifications
                            </div>
                        </div>
                        <div className="dashboard-navbar-user-collapsible-item">
                            <img className="dashboard-navbar-user-collapsible-item-img" src={checkedIcon} alt="icon" />
                            <div className="dashboard-navbar-user-collapsible-item-title">
                                Confirmations
                            </div>
                        </div>
                        <div className="dashboard-navbar-user-collapsible-item">
                            <img className="dashboard-navbar-user-collapsible-item-img" src={widgetIcon} alt="icon" />
                            <div className="dashboard-navbar-user-collapsible-item-title">
                                Widgets
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </nav>

    )
}
export default Navbar;