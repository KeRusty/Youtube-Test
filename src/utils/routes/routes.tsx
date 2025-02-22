import { Routes, Route, useNavigate } from "react-router-dom";
import React, { ReactElement } from "react";

// Routes
import Home from "../../pages/home/home";

function AllRoutes(): ReactElement | null {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AllRoutes;
