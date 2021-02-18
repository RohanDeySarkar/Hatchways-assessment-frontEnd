export const initialState = {
    students: [],
    tags: [],
};

const reducer = (state, action) => {
     // console.log(action)
    // console.log(state)

    switch(action.type) {
        case 'SET_DATA':
            return {
                ...state,
                students: action.payload
        }

        case 'SET_TAG':
            return {
                ...state,
                tags: [...state.tags, action.payload]
        }
        
        default:
            return state;
    }
};

export default reducer;