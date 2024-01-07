import React from "react";
import '../../../assets/css/Dashboard.css'
import Navbar from "../navbar/navbar";
import rightArrow from '../../../assets/media/right-arrow.png';
import eyeIcon from '../../../assets/media/eye.png';
import TinyLineChart from "../../charts/tinyLineChart";
const Dashboard = () => {


    const data = [
        { name: 'Jan', value: 150 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 200 },
        { name: 'Apr', value: 500 },
      ];

    return (
        <div className="dashboard-container">
            <Navbar />
            <div className="dashboard-wrapper">
                <div className="dashboard-content-container">

                    <div className="dashboard-location-container">
                        <div className="dashboard-location-item">
                            DASHBOARD
                        </div>
                        <img src={rightArrow} alt=">" />
                        <div className="dashboard-location-item">
                            BEYOND.COM
                        </div>
                    </div>

                    <div className="dashboard-header-container">
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <div className="dashboard-content-card-content">
                                    <img className="dashboard-content-card-img" src={eyeIcon} alt="eye"/>
                                    <div className="dashboard-content-card-description">
                                        <div className="dashboard-content-card-title">
                                            Total View
                                        </div>
                                        <div className="dashboard-content-card-value">
                                            $4562
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <div className="dashboard-content-card-content-right">
                                    <TinyLineChart data={data} />
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <div className="dashboard-content-card-content">
                                    <img className="dashboard-content-card-img" src={eyeIcon} alt="eye"/>
                                    <div className="dashboard-content-card-description">
                                        <div className="dashboard-content-card-title">
                                            Total View
                                        </div>
                                        <div className="dashboard-content-card-value">
                                            $4562
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <div className="dashboard-content-card-content">
                                    <img className="dashboard-content-card-img" src={eyeIcon} alt="eye"/>
                                    <div className="dashboard-content-card-description">
                                        <div className="dashboard-content-card-title">
                                            Total View
                                        </div>
                                        <div className="dashboard-content-card-value">
                                            $4562
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>





                </div>
                <div className="dashboard-widget-container">
                </div>
            </div>
        </div>
    )

}
export default Dashboard;