import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };
  const backwardHandler = () => {
    skipSong(false);
  };
  const forwardHandler = () => {
    skipSong();
  };
  return (
    <div className='c-player--controls'>
      <button className='skip-btn' onClick={backwardHandler}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className='play-btn' onClick={togglePlaying}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className='skip-btn'>
        <FontAwesomeIcon icon={faForward} onClick={forwardHandler} />
      </button>
    </div>
  );
};

export default PlayerControls;
