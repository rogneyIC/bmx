import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="lg:w-64">
                {/* Sidebar backdrop (mobile only) */}
                <div
                    // className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    //     sidebarOpen
                    //         ? "opacity-100"
                    //         : "opacity-0 pointer-events-none"
                    // }`}
                    className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-0 pointer-events-none`}
                    aria-hidden="true"
                ></div>

                {/* Sidebar */}
                <div
                    id="sidebar"
                    ref={sidebar}
                    // className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${
                    //     sidebarOpen ? "translate-x-0" : "-translate-x-64"
                    // }`}
                    className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out -translate-x-64`}
                ></div>
            </div>
        );
    }
}

export default Test;
