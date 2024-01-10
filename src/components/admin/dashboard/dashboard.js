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
import TinyLineCards from "../cards/tinyLineCards";
import LocationRow from "../../location/locationRow";
const Dashboard = () => {


    function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Function to generate an array with 20 items, each with a random value
    const createStaticDataArrays = () => {
        const dataArray1 = [
            { name: 'Month 1', value: 100, title: 'Total View' },
            { name: 'Month 2', value: 250 },
            { name: 'Month 3', value: 150 },
            { name: 'Month 4', value: 400 },
            { name: 'Month 5', value: 100 }
        ];

        const dataArray2 = [
            { name: 'Month 1', value: 200, title: 'Total Earning' },
            { name: 'Month 2', value: 300 },
            { name: 'Month 3', value: 350 },
            { name: 'Month 4', value: 450 },
            { name: 'Month 5', value: 500 }
        ];

        const dataArray3 = [
            { name: 'Month 1', value: 50, title: 'Total Spend' },
            { name: 'Month 2', value: 200 },
            { name: 'Month 3', value: 300 },
            { name: 'Month 4', value: 100 },
            { name: 'Month 5', value: 350 }
        ];

        const dataArray4 = [
            { name: 'Month 1', value: 400, title: 'Total sale' },
            { name: 'Month 2', value: 100 },
            { name: 'Month 3', value: 150 },
            { name: 'Month 4', value: 200 },
            { name: 'Month 5', value: 250 }
        ];


        return [dataArray1, dataArray2, dataArray3, dataArray4];
    };

    // Atama işlemi
    const [data1, data2, data3, data4] = createStaticDataArrays();





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

    const tableData = [
        {
            userIcon: userIcon,
            title: nameArray[0],
            email: emailArray[0],
            classification: classificationArray[0],
            locationIcon: locationIcon,
            location: locationArray[0],
            description: descriptionArray[0],
            status: 'Pending',
        },
        {
            userIcon: userIcon,
            title: nameArray[1],
            email: emailArray[1],
            classification: classificationArray[1],
            locationIcon: locationIcon,
            location: locationArray[1],
            description: descriptionArray[1],
            status: 'In Progress',
        },
        {
            userIcon: userIcon,
            title: nameArray[2],
            email: emailArray[2],
            classification: classificationArray[2],
            locationIcon: locationIcon,
            location: locationArray[2],
            description: descriptionArray[2],
            status: 'Completed',
        },
        {
            userIcon: userIcon,
            title: nameArray[3],
            email: emailArray[3],
            classification: classificationArray[3],
            locationIcon: locationIcon,
            location: locationArray[3],
            description: descriptionArray[3],
            status: 'Pending',
        },
        {
            userIcon: userIcon,
            title: nameArray[4],
            email: emailArray[4],
            classification: classificationArray[4],
            locationIcon: locationIcon,
            location: locationArray[4],
            description: descriptionArray[4],
            status: 'In Progress',
        },
    ];


    const locationRowArray = [
        { title: 'ADMIN' },
        { title: 'Dashboard' },
    ];



    return (
        <>

            <div className="dashboard-wrapper">
                <div className="dashboard-content-container">

                    <LocationRow locationArray={locationRowArray} />
                    

                    <TinyLineCards data1={data1} data2={data2} data3={data3} data4={data4} />

                    <div className="dashboard-content">
                        <div className="dashboard-content-left">
                            <div className="dashboard-card-container">
                                <div className="dashboard-card-img-container">
                                    <img className="dashboard-card-img" src={bagImg} alt="img" />
                                </div>
                                <div className="dashboard-card-content">
                                    <div className="dashboard-card-content-button">
                                        View Products
                                    </div>
                                </div>

                            </div>
                            <div className="dashboard-radial-container">
                                <TinyBarChart chartData={chartData} colors={colors} />


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
        </>
    )

}
export default Dashboard;