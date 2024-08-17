import React, { useState, useEffect, useRef } from 'react';
import './MSPLAYER.css';
import { images } from '../src/assets/assets';

const MPLAYER = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Use useRef to avoid unnecessary re-renders
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [audioRef]); // Only re-run when audioRef changes

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const playPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const progress = event.target.value;
    audio.currentTime = progress;
    setCurrentTime(progress); // Update state for visual feedback
  };

  return (
    <div>
      <div className="container">
        <div className="music-player">
          <nav>
            <div className="circle">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="circle">
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <img src={images.singer2} className="song-img" alt="" />
          <h1>Despacito</h1>
          <p>Luis Fonsi Ft. Puerto Rican</p>

          <audio  ref={audioRef} onLoadedMetadata={handleLoadedMetadata} onTimeUpdate={handleTimeUpdate}>
            <source src="../src/assets/Whistle-Podu-MassTamilan.dev.mp3" type="audio/mpeg" />
          </audio>
          <input id='progress' type="range" ref={progressRef} value={currentTime} min="0" max={duration} onChange={handleProgressChange} />

          <div className="controls">
            <div><i className="fa-solid fa-backward"></i></div>
            <div onClick={playPause}>
              <i className={`fa-solid fa-${isPlaying ? 'pause' : 'play'}`} id="ctrlIcon"></i>
            </div>
            <div><i className="fa-solid fa-forward"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPLAYER;