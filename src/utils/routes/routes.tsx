import { Routes, Route, useNavigate } from "react-router-dom";
import React, { ReactElement } from "react";

// Routes
import Home from "../../pages/home/home";
import Video from "../../pages/video/video";
import Gif from "../../pages/gifs/gif";

function AllRoutes(): ReactElement | null {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/gifs" element={<Gif />} />
        </Routes>
    );
};

export default AllRoutes;
