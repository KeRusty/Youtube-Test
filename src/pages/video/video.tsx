import React, { ReactElement, useState } from 'react';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

function Video(): ReactElement | null {
    const navigate = useNavigate();
    const [position, setPosition] = useState<number>(parseFloat(localStorage.getItem("videoPosition") || "0"));

    const handleProgress = (state: { playedSeconds: number }) => {
        localStorage.setItem("videoPosition", state.playedSeconds.toString());
    };
    return (
        <div className="p-4 flex flex-col items-center">
            <ReactPlayer
                url={'https://www.youtube.com/watch?v=63EAJJakvEU&ab_channel=IliaTS'}
                playing={false}
                controls
                onProgress={handleProgress}
                progressInterval={1000}
                width="80%"
                height="60vh"
            />
            <button className="mt-2 p-2 bg-red-500 text-white rounded" onClick={() => navigate("/")}>Edit</button>
            <button className="mt-2 p-2 bg-green-500 text-white rounded" onClick={() => navigate("/gif")}>Go to GIF</button>
        </div>
    )
}

export default Video;