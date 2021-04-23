import React from 'react';

const PlayerDetails = ({ song, isPlaying }) => {
  return (
    <div className='c-player--details'>
      <div className={`details-img ${isPlaying ? 'img-spinner' : ''}`}>
        <img src={song.img_src} alt={song.title} />
      </div>
      <h3 className='details-title'>{song.title}</h3>
      <h3 className='details-artist'>{song.artist}</h3>
    </div>
  );
};

export default PlayerDetails;
