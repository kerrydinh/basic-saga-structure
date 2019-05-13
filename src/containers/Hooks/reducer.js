
const initialState = {
    listItem: []
}    


function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case "setExample":
            state.listItem.push(action.data);
            console.log(state);
            return {
                ...state
            }
            return action.data;

        default:
            return state;
    }
}

export default exampleReducer;