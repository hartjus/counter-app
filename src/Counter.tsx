import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from './RootState';
import {COUNTER_INCREMENT, COUNTER_DECREMENT, CounterIncrementAction, CounterDecrementAction} from './store/Counter.store';

export interface ICounterProps {
    label: string;
    size: 'small'| 'large';
    // onCounterChange: (count: number) => void;
}

const Counter: React.FC<ICounterProps> = (props: ICounterProps) => {
    const dispatch = useDispatch();

    // const [count, setCount] = React.useState<number>(0);

    const {currentCount} = useSelector((state: IRootState) => state.counter);

    const onIncrement = () => {
        // const newCount = count + 1;
        // setCount(newCount);
        // props.onCounterChange(newCount);
        const action: CounterIncrementAction = {
            type: COUNTER_INCREMENT,
            payload: {}
        };

        dispatch(action);
    }

    const onDecrement = () => {
        // const newCount = count - 1;
        // setCount(newCount);
        // props.onCounterChange(newCount);

        const action: CounterDecrementAction = {
            type: COUNTER_DECREMENT,
            payload: {}
        };

        dispatch(action);
    }

    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>

            {
                props.size === 'small' &&
                <span>Count of {props.label}: {currentCount}</span>
            }

            {
                props.size === 'large' &&
                <h1>Count of {props.label}: {currentCount}</h1>
            }
        </div>
    );
};

export default Counter;
