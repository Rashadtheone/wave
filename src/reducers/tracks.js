import * as actionTypes from '../constants/actionTypes';

//intial state is the place where you normally would put some hardcoded data from the beginning.
const initialState = []

export default function(state = initialState, action) {
    //used to differ between different action(s)
    switch (action.type){
        case actionTypes.TRACKS_SET:
        return setTracks(state, action)
    }
    return state;
}
function setTracks(state, action) {
    const { tracks } = action;
    return [...state, ...tracks]
}