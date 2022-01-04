import React from 'react';

interface IPopupResult {
    quizLength: number
    seq: number
    imgSrc: string
    imgAlt: string
    text: string
}


const PopupResult: React.FC<IPopupResult> =
    ({
         quizLength,
         seq,
         imgSrc,
         imgAlt,
         text
     }) => {
        return (
            <>
                <div className={'w-7/12 flex items-center justify-center mx-auto'}>
                    <img className={'w-full animate-fade-in-up mx-auto'} src={imgSrc} alt={imgAlt}
                         style={{'maxWidth': '175px'}}/>
                </div>
                <p className={'animate-fade-in-up whitespace-pre-line text-sm md:text-base lg:text-lg text-gray-300 text-lg my-5 text-center px-10'}>
                    {quizLength === seq + 1 ?
                        "문제를 다 푸셨어요! 너무 수고하셨고 결과를 확인해주세요 ! 😊"
                        :
                        text
                    }
                </p>
            </>
        )
    }

export default PopupResult;