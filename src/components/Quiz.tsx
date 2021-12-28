import React from 'react';
import {IQuizApi} from "../atoms";


interface IQuiz {
    quiz: IQuizApi
}

const Quiz: React.FC<IQuiz> =
    ({
         quiz
     }) => {
        return (
            <section
                className={'animate-fade-in-up w-full pb-14 lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 pt-0 w-10/12 md:w-3/6 lg:w-2/6 bg-white rounded-lg'}>
                    <h4 className={'py-6'}>{quiz.question}</h4>
                    <div className={'flex flex-col md:flex-row flex-wrap w-full rounded-lg box-border'} style={{maxWidth: '500px'}}>
                        {[...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() - 0.5).map((select) => {
                            return (
                                <div className={'w-full flex-1 animate-fade-in-up bg-red-300 rounded-lg p-5'}>
                                    {select}
                                </div>
                            )
                        })}
                    </div>
                </article>


            </section>
        )
    }

export default Quiz;