import React, { useState, useEffect } from 'react';
import Player from './components/Player';

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "I'm So Lonely",
      artist: 'D-Vision',
      img_src: './images/song-1.jpg',
      src: './music/track-1.mp3',
    },
    {
      title: 'ဒါဟာဘ၀ပါ',
      artist: 'Han Htoo Lwin',
      img_src: './images/song-2.jpg',
      src: './music/track-2.mp3',
    },
    {
      title: 'ဒုက္ခရောက်ပြီ',
      artist: 'Han Htoo Lwin',
      img_src: './images/song-3.jpg',
      src: './music/track-3.mp3',
    },
    {
      title: 'Adio Amigos',
      artist: 'Han Htoo Lwin',
      img_src: './images/song-4.jpg',
      src: './music/track-4.mp3',
    },
    {
      title: 'Suicide love',
      artist: 'Yung Hungo',
      img_src: './images/song-5.jpg',
      src: './music/track-5.mp3',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  useEffect(() => {
    setNextIndex(() => {
      if (currentIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  }, [currentIndex]);
  return (
    <div className='App'>
      <Player
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        nextIndex={nextIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
