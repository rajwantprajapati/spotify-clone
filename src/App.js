import { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";

import Login from './components/login/Login';
import Player from './components/player/Player';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const getMyProfileData = async() => {
      const user = await spotify.getMe();

      dispatch({
        type: "SET_USER",
        user,
      });

    };

    // Method to get user's playlist.
    const getUserPlayLists = async() => {
      const playLists = await spotify.getUserPlaylists();

      dispatch({
        type: "SET_PLAYLISTS",
        playLists,
      });
    }

    // Method to get discover weekly.
    const getDiscoverWeeklyPlayLists = async() => {
      const playLists = await spotify.getPlaylist('3pOnnqSCSRZHlPpfcDzyUW');

      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playLists,
      });
    }; 

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const { access_token: accessToken  } = hash;

    if(accessToken) {
      dispatch({
        type: "SET_TOKEN",
        token: accessToken,
      });

      spotify.setAccessToken(accessToken);

      getMyProfileData();
      getUserPlayLists();
      getDiscoverWeeklyPlayLists();
    }
  }, [dispatch]);

  console.log("🙂:", user);
  console.log("token: ", token);

  return (
    <div className="app">
      {token ? (<Player spotify={spotify} />): (<Login />)}
    </div>
  );
}

export default App;
