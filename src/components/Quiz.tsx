import React from 'react';
import {IQuizApi} from "../atoms";
import {motion} from "framer-motion"

interface IQuiz {
    quiz: IQuizApi
    seq: number
    parsingHtmlEntity: (HTMLEntity: string) => string;
    chooseAnswer : (answer : string) => void;
}

const Quiz: React.FC<IQuiz> =
    ({
         quiz,
         seq,
         parsingHtmlEntity,
         chooseAnswer
     }) => {
        return (
            <section
                className={'animate-fade-in-up w-full pb-14 lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 pt-0 w-10/12 md:w-3/6 lg:w-3/6 bg-white rounded-lg'}>
                    <h4 className={'py-2 mt-4 font-bold text-lg'}>문제 {seq + 1}</h4>
                    <h4 className={'py-6 pt-0 font-bold text-lg'}>{parsingHtmlEntity(quiz.question)}</h4>
                    <div className={'grid grid-cols-1 gap-3 md:grid-cols-2 w-full rounded-lg '}
                         style={{maxWidth: '850px'}}>
                        {[...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() - 0.5).map((select,selectIndex) => {
                            return (
                                <motion.div
                                    key={selectIndex}
                                    onClick={() => chooseAnswer(select)}
                                    className={'w-full font-bold text-white animate-fade-in-up bg-sky-400 rounded-lg p-5 text-base lg:text-xl'}
                                    whileTap={{scale: 0.9}}
                                >
                                    {select}
                                </motion.div>

                            )
                        })}
                    </div>
                </article>


            </section>
        )
    }

export default Quiz;