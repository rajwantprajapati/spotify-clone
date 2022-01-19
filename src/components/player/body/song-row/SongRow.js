import "./SongRow.css";

const SongRow = ({ track, playSong }) => {
    return (
        <div className="song-row" onClick={() => playSong(track.id)}>
            <img className="song-row__album" src={track.album.images[0].url} alt="" />
            <div className="song-row__info">
                <h1>{track.name}</h1>
                <p>{track.artists.map(artist => artist.name).join(", ")} -{" "}</p>
                {track.album.name}
            </div>
        </div>
    )
}

export default SongRow;
