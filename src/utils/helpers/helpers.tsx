export const isYouTubeLink = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+(&.*)?$/;
    return youtubeRegex.test(url);
};

export const handleProgress = (state: { playedSeconds: number }) => {
    localStorage.setItem("videoPosition", state.playedSeconds.toString());
};