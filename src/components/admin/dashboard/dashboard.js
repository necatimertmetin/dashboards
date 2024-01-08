import React, { useState } from "react";
import '../../../assets/css/Dashboard.css'
import Navbar from "../navbar/navbar";
import rightArrow from '../../../assets/media/right-arrow.png';
import eyeIcon from '../../../assets/media/eye.png';
import TinyLineChart from "../../charts/tinyLineChart";
import DonutChart from "../../charts/donutChart";
import preferencesIcon from '../../../assets/media/options.png'
const Dashboard = () => {


    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Function to generate an array with 20 items, each with a random value
    function generateRandomDataArray() {
        const dataArray = [];
        for (let i = 1; i <= 10; i++) {
            const value = getRandomValue(100, 800); // Adjust the range as needed
            const title = value % 2 === 0 ? 'Total View' : 'Price'; // Set title conditionally
            dataArray.push({ name: `Month ${i}`, value, title });
        }
        return dataArray;
    }

    // Generate 4 arrays
    const data1 = generateRandomDataArray();
    const data2 = generateRandomDataArray();
    const data3 = generateRandomDataArray();
    const data4 = generateRandomDataArray();

    const chartData = [
        { name: 'Instagram', value: 400 },
        { name: 'Youtube', value: 300 },
        { name: 'Category C', value: 200 },
        { name: 'Category D', value: 100 },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (sortBy === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(key);
            setSortOrder('asc');
        }
    };

    const handleFilter = () => {
        // Filter işlevselliği ekleyin
        console.log('Filter button clicked');
      };

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
                                <TinyLineChart data={data1} strokeColor={"#32CD32"} />
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <TinyLineChart data={data2} strokeColor={"#7862f8"} />
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <TinyLineChart data={data3} strokeColor={"#ff0055"} />
                            </div>
                        </div>
                        <div className="dashboard-content-card">
                            <div class="dashboard-content-card2">
                                <TinyLineChart data={data4} strokeColor={"#FFD700"} />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-content">
                        <div className="dashboard-radial-container">
                            <DonutChart chartData={chartData} colors={colors} />


                        </div>
                        <div className="dashboard-mini-table-container">
                            <div className="dashboard-mini-table-control-container">
                                <div className="dashboard-mini-table-title" onClick={() => handleSort('name')}>
                                    Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                                </div>
                                <div className="dashboard-mini-table-title" onClick={() => handleSort('email')}>
                                    Email {sortBy === 'email' && (sortOrder === 'asc' ? '▲' : '▼')}
                                </div>
                                <div className="dashboard-mini-table-title" onClick={handleFilter}>
                                    Filter
                                </div>
                                <div className="dashboard-mini-table-control-wrapper" onClick={() => console.log('Other button clicked')}>
                                    <img className="dashboard-mini-table-control-img" src={preferencesIcon} alt="settings"/>
                                </div>
                            </div>
                            <div className="dashboard-mini-table">
                                content
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