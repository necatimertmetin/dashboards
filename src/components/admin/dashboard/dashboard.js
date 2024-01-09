import React, { useState } from "react";
import '../../../assets/css/Dashboard.css'
import Navbar from "../navbar/navbar";
import rightArrow from '../../../assets/media/right-arrow.png';
import eyeIcon from '../../../assets/media/eye.png';
import TinyLineChart from "../../charts/tinyLineChart";
import TinyBarChart from "../../charts/tinyBarChart";
import preferencesIcon from '../../../assets/media/options.png'
import locationIcon from '../../../assets/media/location.png'
import userIcon from '../../../assets/media/user.webp';
import bagImg from '../../../assets/media/SVG/bag.svg';
import DashboardTable from "../../table/dashboardTable";
import ScrollContainer from 'react-indiana-drag-scroll'
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
        { name: 'Sunday', value: 100 },
        { name: 'Monday', value: 350 },
        { name: 'Tuesday', value: 200 },
        { name: 'Wednesday', value: 120 },
        { name: 'Thursday', value: 300 },
        { name: 'Friday', value: 280 },
        { name: 'Saturday', value: 130 },
    ];

    const colors = ['#32CD32', '#7862f8', '#ff0055', '#FFD700'];
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



    const getRandomStatus = () => {
        const statusOptions = ['Online', 'Away', 'Offline'];
        const randomIndex = Math.floor(Math.random() * statusOptions.length);
        return statusOptions[randomIndex];
    };

    const nameArray = ['John Doe', 'Jane Doe', 'Alice Smith', 'Bob Johnson', 'Eva Brown'];
    const emailArray = ['john.doe@mail.com', 'jane.doe@mail.com', 'alice.smith@mail.com', 'bob.johnson@mail.com', 'eva.brown@mail.com'];
    const classificationArray = ['Meeting', 'Event', 'Appointment', 'Task', 'Reminder'];
    const locationArray = ['New York - USA', 'London - UK', 'Tokyo - Japan', 'Berlin - Germany', 'Sydney - Australia'];
    const descriptionArray = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ];

    const tableData = Array.from({ length: 5 }, (_, index) => ({
        userIcon: userIcon,
        title: nameArray[Math.floor(Math.random() * nameArray.length)],
        email: emailArray[Math.floor(Math.random() * emailArray.length)],
        classification: classificationArray[Math.floor(Math.random() * classificationArray.length)],
        locationIcon: locationIcon,
        location: locationArray[Math.floor(Math.random() * locationArray.length)],
        description: descriptionArray[Math.floor(Math.random() * descriptionArray.length)],
        status: getRandomStatus(),
    }));



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
                        <div className="dashboard-content-left">
                            <div className="dashboard-radial-container">
                                <TinyBarChart chartData={chartData} colors={colors} />


                            </div>
                            <div className="dashboard-card-container">
                                <div className="dashboard-card-img-container">
                                    <img className="dashboard-card-img" src={bagImg} alt="img" />
                                </div>
                                <div className="dashboard-card-content">
                                    <div className="dashboard-card-content-title">
                                        YOU'RE DOING GREAT !
                                    </div>
                                    <div className="dashboard-card-content-data">
                                        Keep Working
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="dashboard-content-right">
                            <div className="dashboard-mini-table-container">
                                <div className="dashboard-mini-table-control-container">
                                    <div className="dashboard-mini-table-title" onClick={() => handleSort('name')}>
                                        Notifications
                                    </div>
                                    <div className="dashboard-mini-table-control-wrapper" onClick={() => console.log('Other button clicked')}>
                                        <img className="dashboard-mini-table-control-img" src={preferencesIcon} alt="settings" />
                                    </div>
                                </div>
                                <ScrollContainer className="dashboard-mini-table">
                                    <DashboardTable data={tableData} />
                                </ScrollContainer>
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