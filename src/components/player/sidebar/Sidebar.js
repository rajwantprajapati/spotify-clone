import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import SidebarOption from "./sidebar-option/SidebarOption";
import { useDataLayerValue } from '../../../DataLayer';
import "./Sidebar.css";

const Sidebar = () => {
    const [{ playLists }, dispatch] = useDataLayerValue();

    console.log("playLists: ", playLists);

    const sidebarOptions = playLists?.items?.map(playList => (
        <SidebarOption
            key={playList.id}
            title={playList.name}
        />
    ));
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOption
                title="Home"
                Icon={HomeIcon}
            />
            <SidebarOption
                title="Search"
                Icon={SearchIcon}
            />
            <SidebarOption
                title="Your Library"
                Icon={LibraryMusicIcon}
            />

            <br />

            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {sidebarOptions}
        </div>
    )
}

export default Sidebar;
