import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import downIcon from '../../Assets/icons_FEtask/down.svg';
import displayIcon from '../../Assets/icons_FEtask/Display.svg';

const Navbar = ({ setSelectedOrdering, setSelectedGrouping }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedGrouping, setSelectedGroupingState] = useState(""); // Local state for grouping
    const [selectedOrdering, setSelectedOrderingState] = useState("title"); // Local state for ordering
    const navigate = useNavigate();
    const dropdownRef = useRef(null); // Ref to the dropdown element

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Handle grouping change
    const handleGroupingChange = (event) => {
        const value = event.target.value;
        setSelectedGrouping(value);
        setSelectedGroupingState(value); // Update local state for grouping
        navigate(`/${value}`); // Navigate based on grouping value
    };

    // Handle ordering change
    const handleOrderingChange = (event) => {
        const value = event.target.value;
        setSelectedOrdering(value);
        setSelectedOrderingState(value); // Update local state for ordering
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className='navbar'>
            <div onClick={toggleDropdown} className="display">
                <img src={displayIcon} className='display_icon' alt="Display Icon" />
                <p>Display</p>
                <img src={downIcon} className='down_icon' alt="Down Icon" />
            </div>
            {isDropdownOpen && (
                <div className='dropdown' ref={dropdownRef}>
                    <div className='dropdown_option'>
                        <p>Grouping</p>
                        <div className="select-wrapper">
                            <select
                                id="grouping-options"
                                className='custom-select'
                                value={selectedGrouping} // Bind selected value to local state
                                onChange={handleGroupingChange}
                            >
                                <option value="">Status</option>
                                <option value="users">User</option>
                                <option value="priority">Priority</option>
                            </select>
                            <img src={downIcon} alt="down" />
                        </div>
                    </div>
                    <div className='dropdown_option'>
                        <p>Ordering</p>
                        <div className="select-wrapper">
                            <select
                                id="ordering-options"
                                className="custom-select"
                                value={selectedOrdering} // Bind selected value to local state
                                onChange={handleOrderingChange}
                            >
                                <option value="title">Title</option>
                                <option value="priority">Priority</option>
                            </select>
                            <img src={downIcon} alt="down" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
