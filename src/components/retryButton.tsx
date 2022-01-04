import React from 'react';

interface IRetryButton {
    containerClassName : string
    text : string
}

const RetryButton : React.FC<IRetryButton> =
    ({
        containerClassName,
        text
     }) => {
    return (
        <div className={`px-2 mb-4 w-full cursor-pointer`}>
            <div className={containerClassName}>
                <button className={'font-bold uppercase text-gray-600'}>{text}</button>
            </div>
        </div>
    )
}

export default RetryButton