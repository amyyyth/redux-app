const valueReducer = (state = 1, action) =>{
    switch(action.type){
        case 'setVal':
            return Number(action.payload);
        default:
            return state;
    }
}

export default valueReducer;