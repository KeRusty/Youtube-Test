import React, { ReactElement } from 'react';
import { useNavigate } from "react-router-dom";

function Gif(): ReactElement | null {
    const navigate = useNavigate();
    return (
        <div className="p-4 flex flex-col items-center">
            <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Funny GIF" className="w-80 h-80" />
            <button className="mt-2 p-2 bg-yellow-500 text-white rounded" onClick={() => navigate("/video")}>Back</button>
        </div>
    )
}

export default Gif;