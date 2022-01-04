import React from 'react';

interface IRetryButton {
    className : string
    text : string
}

const RetryButton : React.FC<IRetryButton> =
    ({
        className,
        text
     }) => {
    return (
        <div className={`px-2 mb-4 w-full cursor-pointer`}>
            <div className={className}>
                <button className={'font-bold uppercase text-gray-600'}>{text}</button>
            </div>
        </div>
    )
}

export default RetryButton