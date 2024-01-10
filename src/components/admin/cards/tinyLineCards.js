import React, { useEffect } from 'react';
import TinyLineChart from '../../charts/tinyLineChart'; 

const TinyLineCards = ({ data1, data2, data3, data4 }) => {
    

    return (
        <div className="dashboard-header-container">
            <div className="dashboard-content-card">
                <div className="dashboard-content-card2">
                    <TinyLineChart data={data1} strokeColor={"#32CD32"} />
                </div>
            </div>
            <div className="dashboard-content-card">
                <div className="dashboard-content-card2">
                    <TinyLineChart data={data2} strokeColor={"#7862f8"} />
                </div>
            </div>
            <div className="dashboard-content-card">
                <div className="dashboard-content-card2">
                    <TinyLineChart data={data3} strokeColor={"#ff0055"} />
                </div>
            </div>
            <div className="dashboard-content-card">
                <div className="dashboard-content-card2">
                    <TinyLineChart data={data4} strokeColor={"#FFD700"} />
                </div>
            </div>
        </div>
    );
};

export default TinyLineCards;
