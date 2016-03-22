import * as Type from 'constants/action-types';

export default function counter(state = 0, action) {
    switch (action.type) {
        case Type.INCREMENT_COUNTER:
            return state + 1;
        case Type.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
