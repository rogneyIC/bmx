import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        // <div className="flex h-screen overflow-hidden">
        //     <Sidebar
        //         sidebarOpen={sidebarOpen}
        //         setSidebarOpen={setSidebarOpen}
        //     />
        //     {/* Content area */}
        //     <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        //         {/*  Site header */}
        //         <Header
        //             sidebarOpen={sidebarOpen}
        //             setSidebarOpen={setSidebarOpen}
        //         />
        //     </div>
        // </div>
        <div className="dashboard">
            <Sidebar />
        </div>
    );
}

export default Dashboard;
