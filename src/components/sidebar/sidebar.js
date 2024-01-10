import React, { useState, useEffect } from "react";
import item1 from '../../assets/media/abstract-shape-1.png';
import item2 from '../../assets/media/abstract-shape-2.png';
import item3 from '../../assets/media/abstract-shape.png';
import item4 from '../../assets/media/rectangle.png';
import '../../assets/css/Sidebar.css';
const Sidebar = ({ onItemSelect }) => {


    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
        onItemSelect(index);
    };

    const items = [
        { imgSrc: item1, title: 'DASHBOARD' },
        { imgSrc: item2, title: 'TEAM MANAGEMENT' },
        { imgSrc: item2, title: 'TITLE' },
        { imgSrc: item4, title: 'TITLE' },
    ];

    return (
        <div className="sidebar-container">
            {items.map((item, index) => (

                <div
                    key={index}
                    className={`sidebar-item-container ${activeItem === index ? 'sidebar-item-active' : ''}`}
                    onClick={() => {handleItemClick(index); onItemSelect(index);}}
                >
                    <img src={item.imgSrc} alt="V" className={`sidebar-item-img`} />
                    <div className="sidebar-item-title">{item.title}</div>
                </div>


            ))}
        </div>
    );
};
export default Sidebar;