import './Body.css';
import Header from './header/Header';
import { useDataLayerValue } from '../../../DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './song-row/SongRow';

const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch]  = useDataLayerValue();

    const playPlaylist = async (id)  => {
        await  spotify.play({
            context_uri: `spotify:playlist:3pOnnqSCSRZHlPpfcDzyUW`,
        });

        const currentPlayingTrack = await spotify.getMyCurrentPlayingTrack();

        dispatch({
            type: "SET_ITEM",
            item: currentPlayingTrack.item,
        });

        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
    }

    const playSong = async(id) => {
        await spotify.play({
            uris: [`spotify:track:${id}`],
        });

        const currentPlayingTrack = await spotify.getMyCurrentPlayingTrack();

        dispatch({
            type: "SET_ITEM",
            item: currentPlayingTrack.item,
        });

        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
    }

    return (
        <div className='body'>
           <Header spotify={spotify} />

           <div className="body__info">
               <img
                    src={discover_weekly?.images[0]?.url}
                    alt="des"
                />
               <div className="body__info-text">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
               </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className='body__shuffle'
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow
                        track={item.track}
                        playSong={playSong}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;
