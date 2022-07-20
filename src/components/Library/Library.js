import {React} from '../../imports/reactimports';
import {LibrarySong} from '../../imports/componentsimports'

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return(

        <div className={`library-container ${libraryStatus ? 'active-library-container' : '' }`}>

            <h2>Library</h2>
            <div className="library-songs">

                {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id}/>)}

            </div>

        </div>

    )
}

export default Library;