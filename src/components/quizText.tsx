import React from 'react';
import {IQuizPresenter} from "../pages/quiz/quizPresenter";
import Popup from "reactjs-popup";
import {motion} from "framer-motion";
import PopupResult from "./popupResult";


interface IQuizText extends Pick<IQuizPresenter, "grade" | "quizLength" | "seq" | "goToNextQuiz"> {
    selectIndex: number
    select: string
}


const QuizText: React.FC<IQuizText> =
    ({
         selectIndex,
         select,
         grade,
         quizLength,
         seq,
         goToNextQuiz
     }) => {
        return (
            <Popup
                key={selectIndex}
                closeOnDocumentClick={false}
                lockScroll={true}
                closeOnEscape={false}
                trigger={
                    <motion.li
                        className={'cursor-pointer w-full font-bold text-white animate-fade-in-up bg-sky-400 rounded-lg p-5 text-base lg:text-xl'}
                        whileTap={{scale: 0.9}}
                        whileHover={{scale: 1.07}}
                    >
                        {select}
                    </motion.li>
                }
                {...{
                    contentStyle: {
                        width: '45vh',
                        background: '#292D3E',
                        borderRadius: '0.5rem',
                        border: 'none',
                        padding: '20px 0'
                    },
                }}
                modal
                nested
            >{(close: any) => (
                <section className={'flex items-center justify-center flex-col rounded-lg '}>
                    <div>
                        {grade(select) ?
                            <PopupResult quizLength={quizLength} seq={seq}
                                         imgSrc={"https://user-images.githubusercontent.com/64651532/147871345-e5dd2829-4297-4726-92e0-ac2b2c52d39f.png"}
                                         imgAlt={"correct png"} text={"ππ» μ€!! μ λ΅μ΄μμ ! ππ» \n λ¨μ λ¬Έμ λ μ λ΅μ ν₯ν΄ κ°μ¦μ!!"}/>
                            :
                            <PopupResult quizLength={quizLength} seq={seq}
                                         imgSrc={"https://user-images.githubusercontent.com/64651532/147871365-8a9b2320-7093-4da8-834c-8e514e3b53d1.png"}
                                         imgAlt={"wrong png"} text={"κ΄μ°?μμ! κ·Έλ΄ μλ μμ£  ! \n λ¨μ λ¬Έμ λ μ λ΅μ ν₯ν΄ λμ ! ππ»"}/>
                        }

                    </div>

                    <div className={'w-full flex items-center justify-center'}>
                        <button
                            className={'bg-blue-600 hover:bg-blue-700 text-gray-200 font-bold p-3 py-1.5 rounded-lg'}
                            onClick={() => goToNextQuiz(select, close)}>
                            {quizLength === seq + 1 ? "κ²°κ³Ό νμΈνκΈ° !" : "λ€μ λ¬Έμ  νκΈ°!"}
                        </button>
                    </div>
                </section>

            )}
            </Popup>
        )
    }

export default QuizText;