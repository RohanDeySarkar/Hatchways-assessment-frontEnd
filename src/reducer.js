export const initialState = {
    students: [],
    tags: [],
    filters: ['', ''],
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

        case 'SET_FILTER':
            return {
                ...state,
                filters: action.payload
            }
        
        default:
            return state;
    }
};

export default reducer;