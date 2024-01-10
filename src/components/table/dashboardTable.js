import React, { useEffect } from 'react';

const DashboardTable = ({ data }) => {
    const statusColors = {
        Online: '#BEF843',
        Away: '#EA9C90',
        Offline: '#D0D3DA',
    };

    useEffect(() => {
        const rows = document.querySelectorAll('.dashboard-mini-table-data-row');

        rows.forEach((row, index) => {
            setTimeout(() => {
                row.classList.add('animate');
            }, index * 200); // 0.2 saniyelik (200ms) gecikme
        });
    }, [data]);

    return (
        <>
            {data.map((rowData, index) => (
                <div className="dashboard-mini-table-data-row" key={index}>
                    <div className="dashboard-mini-table-data-wrapper">
                        <img className="dashboard-mini-table-data-img" src={rowData.userIcon} alt="user" />
                    </div>
                    <div className="dashboard-mini-table-data-wrapper">
                        <div className="dashboard-mini-table-data-title">{rowData.title}</div>
                        <div className="dashboard-mini-table-data-description">{rowData.email}</div>
                    </div>
                    <div className="dashboard-mini-table-data-wrapper">
                        <div className="dashboard-mini-table-data-classification">{rowData.classification}</div>
                    </div>
                    <div className="dashboard-mini-table-data-wrapper">
                        <div className="dashboard-mini-table-data-location-container">
                            <img className="dashboard-mini-table-data-location-img" src={rowData.locationIcon} alt="loc" />
                            <div className="dashboard-mini-table-data-location">{rowData.location}</div>
                        </div>
                    </div>
                    <div className="dashboard-mini-table-data-wrapper">
                        <div className="dashboard-mini-table-data">{rowData.description}</div>
                    </div>
                    <div className="dashboard-mini-table-data-wrapper">
                        <div className="dashboard-mini-table-data-status-container">
                            <div className="dashboard-mini-table-data-status-indicator" style={{ backgroundColor: statusColors[rowData.status] }} />
                            <div className="dashboard-mini-table-data-status-title" style={{ color: statusColors[rowData.status] }}>
                                {rowData.status}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DashboardTable;
