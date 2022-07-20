//React Imports
import {React, useState, useRef} from '../imports/reactimports';

//Component Imports
import {Player, Song, Library, Nav} from '../imports/componentsimports'

//Data Import
import data from '../data'

//Styling
import '../App/App.scss';

function App() {

  //Ref
  const audioRef = useRef(null);

  //State

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
})
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage:animation })
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) %songs.length]);
      if(isPlaying) {
        setTimeout(() => {
          audioRef.current.play();
        }, 100)
      }
  }
  


  const [libraryStatus, setLibraryStatus] = useState(false);

  return(
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>

      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>

      <Song currentSong={currentSong}/>
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}/>

      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>

    </div>

    
  );
}

export default App;
