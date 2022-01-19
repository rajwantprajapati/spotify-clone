export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    // token: "BQA6or_j9mBUUtEuUl6_YK_w_91Bt0evds1qagIIeU19IooFaDBdkThs41MGMlf1cigD_NGgTpq5sSv9zQWa2SdL_oLhSLrmofbC7JPljGXf3FsKRfXE5cn6lprTvHDDdvguaPwdW4pPVHwXWCT6Bx7eUe4ezZYwSrhfF2Prsuj4TxqlKf8L",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":  
            return {
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playLists: action.playLists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default:
            return state;
    }
};

export default reducer;