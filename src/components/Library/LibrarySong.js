import {React} from '../../imports/reactimports';

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs}) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song);

        //Active state 
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return{
                    ...song, 
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })

        setSongs(newSongs);

        if(isPlaying) audioRef.current.play();


    }

    return(

        <div onClick={songSelectHandler} className={`library-song-container ${song.active ? 'selected' : ''}`}>

            <img src={song.cover} alt={song.name}></img>

            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>

    );
}

export default LibrarySong;