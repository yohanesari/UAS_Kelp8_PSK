import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/admin">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/users">Users</Link>
                </li>
                <li>
                    <Link to="/admin/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/">Back to Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
