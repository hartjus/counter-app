import * as React from 'react';

export interface IHistoryProps {
    isEnabled: boolean;
    entries: number[];
}

const History: React.FC<IHistoryProps> = (props: IHistoryProps) => {
    return(
        <ul>
            {
                props.isEnabled &&
                props.entries.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))
            }
        </ul>
    );
};

export default History;
