import React, { ReactElement, useState } from 'react';
import ReactPlayer from "react-player";
import { SourceProps } from 'react-player/base';

// helpres
import { isYouTubeLink, handleProgress } from '../../utils/helpers/helpers';

// Styles
import './styles.scss'

function Home(): ReactElement | null {

    const [inputUrl, setInputUrl] = useState<string>("");
    const [playVideo, setPlayVideo] = useState<boolean>(false)
    const [videoURL, setVideoURL] = useState<string | string[] | SourceProps[] | MediaStream | undefined>('');

    const handleSave = () => {
        if (playVideo) {
            setInputUrl('')
            setPlayVideo(false)
        } else {
            localStorage.setItem("videoPosition", "0");

            const isCorrectURL = isYouTubeLink(inputUrl?.trim());

            if (isCorrectURL) {
                setPlayVideo(true)
                setVideoURL(inputUrl)
                localStorage.setItem("videoUrl", inputUrl);
            } else {
                window.alert('Oops this does not seem to be a valid Youtube URL, try again')
            }
        }

    };

    return (
        <div className="home-container">
            {playVideo &&
                <div className='video-player-container'>
                    <ReactPlayer
                        url={videoURL}
                        playing={false}
                        controls
                        onProgress={handleProgress}
                        progressInterval={1000}
                        width="80%"
                        height="70vh"
                    />
                </div>
            }

            <div className='textbox-container'>
                <input
                    type="text"
                    placeholder="YouTube Video URL"
                    className="text-box"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                />
            </div>

            <div className=''>

                <button className="watch-button" onClick={handleSave}>
                    {playVideo ? 'Edit ' : 'Watch Video'}
                </button>
            </div>

        </div>
    );
}

export default Home;