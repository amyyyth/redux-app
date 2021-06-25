const isLoggedin = (state = false, action) => {
    switch(action.type){
        case 'signin':
            return !state;
        default:
            return state;
    }
}

export default isLoggedin;