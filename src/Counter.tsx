import * as React from 'react';

export interface ICounterProps {
    label: string;
    size: 'small'| 'large';
    onCounterChange: (count: number) => void;
}

const Counter: React.FC<ICounterProps> = (props: ICounterProps) => {

    const [count, setCount] = React.useState<number>(0);

    const onIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        props.onCounterChange(newCount);
    }

    const onDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        props.onCounterChange(newCount);
    }

    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>

            {
                props.size === 'small' &&
                <span>Count of {props.label}: {count}</span>
            }

            {
                props.size === 'large' &&
                <h1>Count of {props.label}: {count}</h1>
            }
        </div>
    );
};

export default Counter;
