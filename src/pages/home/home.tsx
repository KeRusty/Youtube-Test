import React, { ReactElement, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home(): ReactElement | null {
    const [inputUrl, setInputUrl] = useState<string>("");
    const navigate = useNavigate();

    const handleSave = () => {
        //   setVideoUrl(inputUrl);
        console.log(inputUrl)
        localStorage.setItem("videoUrl", inputUrl);
        localStorage.setItem("videoPosition", "0");
        navigate("/video");
    };

    return (
        <div className="p-4 flex flex-col items-center">
            <input
                type="text"
                placeholder="YouTube Video URL"
                className="p-2 border rounded w-96"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
            />
            <button className="mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default Home;