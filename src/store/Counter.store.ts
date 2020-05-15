//
// CONSTANTS
//
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

//
// ACTIONS
//

export interface CounterIncrementAction {
    type: typeof COUNTER_INCREMENT;
    payload: {};
}

export interface CounterDecrementAction {
    type: typeof COUNTER_DECREMENT;
    payload: {};
}

type CounterActions = CounterIncrementAction | CounterDecrementAction;

//
// STATE
//

export interface ICounterStore {
    currentCount: number;
    history: number[];
    showHistory: boolean;
}

const initialState: ICounterStore = {
    currentCount: 0,
    history: [],
    showHistory: false
};

//
// REDUCER
//

export function counterReducer(state: ICounterStore = initialState, action: CounterActions): ICounterStore {
    switch(action.type) {
        case 'COUNTER_INCREMENT':
            return {...state, currentCount: state.currentCount + 1};
        case 'COUNTER_DECREMENT':
            return {...state, currentCount: state.currentCount - 1};
        default:
            return {...state};
    }
}
