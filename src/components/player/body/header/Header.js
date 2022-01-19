import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from '../../../../DataLayer';

import "./Header.css";

const Header = ({ spotify }) => {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder='Search for Artists, Song or Podcasts'
                />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0].url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
