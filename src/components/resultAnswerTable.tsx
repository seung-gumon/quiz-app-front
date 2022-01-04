import React from 'react';


interface IAnswer {
    containerClassName: string,
    correctOrWrongLength: number
    text: string
}


const ResultAnswerTable: React.FC<IAnswer> =
    ({
         containerClassName,
         correctOrWrongLength,
         text
     }) => {
        return (
            <div className={containerClassName}>
                <div className={'flex items-center'}>
                    <h5 className={'font-bold uppercase text-gray-600'}>{text}</h5>
                </div>
                <h3 className={'font-bold text-3xl text-gray-600'}>{correctOrWrongLength}</h3>
            </div>
        )
    }

export default ResultAnswerTable;