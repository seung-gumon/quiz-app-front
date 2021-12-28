import React from 'react';
import {IQuizApi} from "../atoms";
import {motion} from "framer-motion"

interface IQuiz {
    quiz: IQuizApi
    seq: number
}

const Quiz: React.FC<IQuiz> =
    ({
         quiz,
         seq
     }) => {
        return (
            <section
                className={'animate-fade-in-up w-full pb-14 lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 pt-0 w-10/12 md:w-3/6 lg:w-3/6 bg-white rounded-lg'}>
                    <h4 className={'py-2 mt-4 font-bold text-lg'}>문제 {seq + 1}</h4>
                    <h4 className={'py-6 pt-0 font-bold text-lg'}>{quiz.question}</h4>
                    <div className={'grid grid-cols-1 gap-3 md:grid-cols-2 w-full rounded-lg '}
                         style={{maxWidth: '850px'}}>
                        {[...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() - 0.5).map((select) => {
                            return (
                                <motion.div
                                    className={'w-full animate-fade-in-up bg-red-300 rounded-lg p-5 text-base lg:text-2xl'}
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