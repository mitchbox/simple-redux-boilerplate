import * as Type from 'constants/action-types';

export function increment() {
    return {
        type: Type.INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: Type.DECREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}
