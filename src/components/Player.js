import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

const Player = ({ currentIndex, setCurrentIndex, nextIndex, songs }) => {
  const audioRef = useRef(null);
  console.log('audioRef ', audioRef);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  const skipSong = (forward = true) => {
    if (forward) {
      setCurrentIndex(() => {
        let temp = currentIndex++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentIndex(() => {
        let temp = currentIndex--;
        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className='c-player'>
      <audio src={songs[currentIndex].src} ref={audioRef}></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={songs[currentIndex]} isPlaying={isPlaying} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next up: &nbsp;</strong>
        <span className='title'>
          {songs[nextIndex].title} by {songs[nextIndex].artist}
        </span>
      </p>
    </div>
  );
};

export default Player;
