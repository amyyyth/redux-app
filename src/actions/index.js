

export const increment = (num) =>{
    return {
        type: 'Increment',
        payload: num
    };
};

export const decrement = (num) =>{
    return {
        type: 'Decrement',
        payload: num
    };
};

export const signin = () =>{
    return {
        type: 'signin'
    };
};

export const setVal = (val) =>{
    return {
        type: 'setVal',
        payload: val
    }
}

